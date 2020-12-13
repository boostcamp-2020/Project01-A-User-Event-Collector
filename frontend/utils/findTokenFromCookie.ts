const findTokenFromCookie = (cookie: string): string | undefined => {
  const cookieArr = cookie.split(";");
  const tokenPart = cookieArr.find(
    (token) => token.includes("token") && !token.includes("csrftoken"),
  );
  if (tokenPart) {
    return tokenPart.split("=")[1];
  }
};

export default findTokenFromCookie;
