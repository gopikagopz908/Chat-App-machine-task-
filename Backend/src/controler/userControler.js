import asyncHandler from "../middleWare/asyncHandler.js";
import User from "../model/authModel.js";
export const getUser = asyncHandler(async (req, res) => {
  const { userId: senderId } = req.user;

  const users = await User.find({ _id: { $ne: senderId } });
  return res.status(200).json({
    message: "Fetched all users except the current user successfully",
    users,
  });
});
