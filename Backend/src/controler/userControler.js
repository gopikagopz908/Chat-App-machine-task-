import asyncHandler from "../middleWare/asyncHandler.js";
import User from "../model/authModel.js";
import follow from "../model/follow.js";
export const getUser = asyncHandler(async (req, res) => {
  const { userId: senderId } = req.user;

  const users = await User.find({ _id: { $ne: senderId } });
  return res.status(200).json({
    message: "Fetched all users except the current user successfully",
    users,
  });
});


export const followUser = async (req, res) => {
  const {userId:currentUserId} = req.user
  const { userIdToFollow } = req.body;

  if (currentUserId === userIdToFollow) {
    return res.status(400).json({ message: "You can't follow yourself" });
  }

  try {
    const currentUserFollowDoc = await follow.findOneAndUpdate(
      { user: currentUserId },
      { $addToSet: { following: userIdToFollow } },
      { upsert: true, new: true }
    );

    const userToFollowDoc = await follow.findOneAndUpdate(
      { user: userIdToFollow },
      { $addToSet: { followers: currentUserId } },
      { upsert: true, new: true }
    );

    res.status(200).json({ message: 'Followed successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error while following', error: err });
  }
};



export const unfollowUser = async (req, res) => {
  const {userId:currentUserId} = req.user;
  const { userIdToUnfollow } = req.params;

  try {
    await follow.findOneAndUpdate(
      { user: currentUserId },
      { $pull: { following: userIdToUnfollow } }
    );

    await follow.findOneAndUpdate(
      { user: userIdToUnfollow },
      { $pull: { followers: currentUserId } }
    );

    res.status(200).json({ message: 'Unfollowed successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error while unfollowing', error: err });
  }
};



// Get a user's followers
// export const getFollowers = async (req, res) => {
//  const { userId } = req.user;
//   const data = await follow.findOne({ user: userId }).populate('followers', 'username');
//   res.json(data?.followers || []);
// };


export const getFollowers = async (req, res) => {
  try {
    const { userId } = req.user;

    const followDoc = await follow.findOne({ user: userId })
      .populate('followers'); // Include desired fields

    res.json(followDoc?.followers || []);
  } catch (error) {
    console.error('Error fetching followers:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


// Get who a user is following
export const getFollowing = async (req, res) => {
  const { userId } = req.user;
  console.log(userId,"userrIddd")  
  const data = await follow.findOne({ user: userId }).populate('following', 'username');
  res.json(data?.following || []);
};

