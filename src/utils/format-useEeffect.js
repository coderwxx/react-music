import { useEffect as originUseEffect } from "react";

export const useEffect = function (fn, ...dependencyList) {
  originUseEffect(() => {
    let isUnmount = false;
    !isUnmount && fn();
    return () => (isUnmount = true);
  }, [...dependencyList]);
};
