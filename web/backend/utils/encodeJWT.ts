import { encode } from "jwt-simple";

const encodeJWT = (payload: any): string => {
  const secret = process.env.JWT_SECRET;
  if (typeof secret !== "string") return encode(payload, "dotenv is not working");
  return encode(payload, secret);
};

export default encodeJWT;
