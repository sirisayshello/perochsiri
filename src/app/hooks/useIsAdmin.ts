'use client'

import { useLayoutEffect, useState } from "react";

export const useIsAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useLayoutEffect(() => {
    const hasAdminCookie = document?.cookie.includes("admin=bomumma");
    setIsAdmin(hasAdminCookie);
  })
  return isAdmin
};
