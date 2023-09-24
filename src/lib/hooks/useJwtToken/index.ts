import { useEffect, useState } from "react";

export const useJwtToken = () => {
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    const myToken = localStorage.getItem("jwt");
    if (!myToken) return;
    setToken(myToken);
  }, []);
  return token;
};
