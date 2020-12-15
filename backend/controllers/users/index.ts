import getUserProfile from "./getUserProfile";

interface User {
  getUserProfile: any;
}

const userController: User = {
  getUserProfile,
};

export default userController;
