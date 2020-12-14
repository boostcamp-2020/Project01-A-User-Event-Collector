import getUserProfile from "./getUserProfile";

interface Auth {
  getUserProfile: any;
}

const authController: Auth = {
  getUserProfile,
};

export default authController;
