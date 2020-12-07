import naverOAuth from "./naver/callbackProcess";
import naverRedir from "./naver/redirection";

interface Auth {
  naverCallback: any;
  naverRedirection: any;
}

const authController: Auth = {
  naverCallback: naverOAuth,
  naverRedirection: naverRedir,
};

export default authController;
