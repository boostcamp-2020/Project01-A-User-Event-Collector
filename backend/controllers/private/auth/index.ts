import checkJWT from "./checkJWT";

interface Auth {
  checkJWT: any;
}

const authController: Auth = {
  checkJWT,
};

export default authController;
