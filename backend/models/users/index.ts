import prisma from "../../prisma";

interface UserInfo {
  username?: string;
  password?: string;
}

interface returnInfo {
  id: number;
  username: string;
}

const postUserInfo = async ({
  username,
  password,
}: UserInfo): Promise<returnInfo | undefined> => {
  if (!username || !password) return undefined;
  const user = await prisma.users.create({ data: { username, password } });
  return {
    id: user.id,
    username,
  };
};

const getUserInfo = async ({
  username,
  password,
}: UserInfo): Promise<returnInfo | null> => {
  const userInfo = await prisma.users.findFirst({
    where: { username, password },
    select: {
      id: true,
      username: true,
    },
  });
  return userInfo;
};

const getUserInfoWithID = async (id: number): Promise<Object | null> => {
  const userInfo = await prisma.users.findFirst({
    where: { id },
    select: {
      id: true,
      username: true,
      profile: true,
    },
  });
  return userInfo;
};

export { postUserInfo, getUserInfo, getUserInfoWithID };
