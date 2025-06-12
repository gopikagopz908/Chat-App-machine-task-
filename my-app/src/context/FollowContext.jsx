import { createContext, useContext, useState } from "react";

const FollowContext = createContext();

export const useFollowContext = () => {
  return useContext(FollowContext);
};

export const FollowProvider = ({ children }) => {
  const [following, setFollowing] = useState([]);

  const setFollowingList = (userIds) => {
    setFollowing(userIds); // Replace entire list with new one (e.g., from API)
  };

  const followUser = (userId) => {
    setFollowing((prev) => (prev.includes(userId) ? prev : [...prev, userId]));
  };

  const unfollowUser = (userId) => {
    setFollowing((prev) => prev.filter((id) => id !== userId));
  };

  const isFollowing = (userId) => following.includes(userId);

  return (
    <FollowContext.Provider
      value={{
        following,
        followUser,
        unfollowUser,
        isFollowing,
        setFollowingList, // use this after fetching from API
      }}
    >
      {children}
    </FollowContext.Provider>
  );
};