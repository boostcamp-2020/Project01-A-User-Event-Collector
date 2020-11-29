import prisma from "../../../prisma";

interface UserInfo {
  username?: string;
  password?: string;
}

const createUser = async ({ username, password }: UserInfo) => {
  if (!username || !password) return;
  const user = await prisma.users.create({ data: { username, password } });
  return user;
};

const getUserInfoData = async ({ username, password }: UserInfo) => {
  const userInfo = await prisma.users.findFirst({
    where: { username, password },
    select: {
      id: true,
      username: true,
    },
  });
  return userInfo;
};

export { createUser, getUserInfoData };
