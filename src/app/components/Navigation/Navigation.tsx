"use client";

import Link from "next/link";
import { ReactNode, use, useState } from "react";
import { useIsAdmin } from "../../hooks/useIsAdmin";
import { NavItem } from "./NavItem";
import { HamburgerMenu } from "./HamburgerMenu";

export const NAV_HEIGHT = 48;

export const Navigation = () => {
  return <HamburgerMenu />;
};
