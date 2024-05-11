import React, { useEffect } from "react";

const useDisableScrollBounce = (): void => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden", "overscroll-none");
    return () => {
      document.body.classList.remove("overflow-hidden", "overscroll-none");
    };
  }, []);
};

export { useDisableScrollBounce };
