import { useState, useEffect } from "react";

const usePath = (): string => {
  const [path, setPath] = useState(window.location.href);
  const listenPopstate = () => {
    const nowPath = window.location.pathname;
    setPath(nowPath);
  };

  useEffect(() => {
    window.addEventListener("popstate", listenPopstate);
    return () => {
      window.removeEventListener("popstate", listenPopstate);
    };
  }, []);
  return path;
};

export default usePath;
