import { decode } from "jwt-simple";

interface UserInfo {
  id: number;
  username: string;
}

const decodeJWT = (jwt: string): UserInfo => {
  const secret = process.env.JWT_SECRET;
  return decode(jwt, secret || "dotenv is not working");
};

export default decodeJWT;
