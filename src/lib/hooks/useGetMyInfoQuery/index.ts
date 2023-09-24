import { useQuery } from "@tanstack/react-query";
import { getMyInfo } from "lib/apis/userInfo";

export const useGetMyInfoQuery = (token: string) => {
  const { data } = useQuery(["member", "info"], () => getMyInfo(token));

  return data;
};
