import getUserProfile from "./userProfile";
import getLikedItem from "./userLikedItems";

interface User {
  getUserProfile: any;
  getLikedItem: any;
}

const userController: User = {
  getUserProfile,
  getLikedItem,
};

export default userController;
