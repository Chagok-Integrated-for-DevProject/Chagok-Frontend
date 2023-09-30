import { useQuery } from "@tanstack/react-query";
import { getMyInfo } from "lib/apis/userInfo";

export const useGetMyInfoQuery = (token: string) => {
  const { data } = useQuery(["member", "info"], () =>
    token.length > 0 ? getMyInfo(token) : Promise.resolve(null),
  );

  return { data };
};
