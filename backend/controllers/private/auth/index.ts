import getUserInfo from "./getUserInfo";

interface Auth {
  getUserInfo: any;
}

const authController: Auth = {
  getUserInfo,
};

export default authController;
