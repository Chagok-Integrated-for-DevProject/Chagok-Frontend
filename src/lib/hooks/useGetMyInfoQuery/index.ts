import { useQuery } from "@tanstack/react-query";
import { getMyInfo } from "lib/apis/userInfo";

export const useGetMyInfoQuery = (token: string) => {
  const isLoggedIn = token === "" ? { login: false } : { login: true };
  const myInfoQueryKey = ["member", "info", isLoggedIn];

  const { data } = useQuery(myInfoQueryKey, () =>
    token.length > 0 ? getMyInfo() : Promise.resolve(null),
  );

  return { data };
};
