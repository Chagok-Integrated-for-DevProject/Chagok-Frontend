import { useEffect, useState } from "react";

export const useJwtToken = () => {
  const [token, setToken] = useState<string>("");

  const logout = () => {
    window.sessionStorage.removeItem("jwt");
    setToken("");
    window.location.reload();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const myToken = window.sessionStorage.getItem("jwt");

    if (myToken) {
      setToken(myToken);
    }
  });

  return { token, logout };
};
