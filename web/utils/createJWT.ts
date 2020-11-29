import { encode } from "jwt-simple";

const createJWT = (payload: any) => {
  const secret = process.env.JWT_SECRET;
  if (typeof secret !== "string") return encode(payload, "dotenv is not working");
  return encode(payload, secret);
};

export { createJWT };
