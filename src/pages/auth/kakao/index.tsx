import { useKakaoAccessToken } from "lib/hooks/useAccessToken";
import type { NextPage } from "next";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const KakaoPage: NextPage = () => {
  const searchParams = useSearchParams();
  const { mutate: kakaoMutate } = useKakaoAccessToken();

  useEffect(() => {
    const authCode = searchParams.get("code");
    if (authCode) {
      kakaoMutate(authCode);
    }
  }, [searchParams, kakaoMutate]);

  return <>KakaoPage</>;
};
export default KakaoPage;
