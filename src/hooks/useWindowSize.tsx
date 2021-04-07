import { useState, useEffect } from "react";
import { intBREAKPOINTS } from "../ui";

function getBreakPoint(windowWidth) {
  if (windowWidth) {
    if (windowWidth < intBREAKPOINTS.small) {
      return "small";
    } else if (windowWidth < intBREAKPOINTS.medium) {
      return "medium";
    } else if (windowWidth < intBREAKPOINTS.large) {
      return "large";
    } else {
      return "extraLarge";
    }
  } else {
    return undefined;
  }
}

function useWindowSize() {
  //TODO: move it to context so listener is not created every time this hook is used
  const isWindowClient = typeof window === "object";
  const [windowSize, setWindowSize] = useState(
    isWindowClient ? getBreakPoint(window.innerWidth) : undefined
  );

  useEffect(() => {
    function setSize() {
      setWindowSize(getBreakPoint(window.innerWidth));
    }
    if (isWindowClient) {
      window.addEventListener("resize", setSize);
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setWindowSize]);
  return windowSize;
}

export default useWindowSize;
