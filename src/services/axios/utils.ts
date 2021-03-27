import jwtDecode from "jwt-decode";

export const IsTokenValidOrUndefined = (accessToken: string): boolean => {
  if (!accessToken) {
    return true;
  }
  const { exp }: any = jwtDecode(accessToken);
  if (Date.now() >= exp * 1000) {
    return false;
  } else {
    return true;
  }
};
