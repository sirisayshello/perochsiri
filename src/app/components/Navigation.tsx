import Link from "next/link";
import { ReactNode } from "react";

export const NAV_HEIGHT = 48;

const NavItem = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link
    href={href}
    className="text-2xl sm:text-3xl font-fave hover:text-muted transition-colors"
  >
    {children}
  </Link>
);

export const Navigation = () => {
  return (
    <nav
      style={{
        boxShadow: "0px -5px 12px var(--accentShadow)",
      }}
      className="flex justify-evenly fixed z-10 bottom-0 w-full p-2"
    >
      <NavItem href="/onskelista">Önskelista</NavItem>
      <NavItem href="/schema">Dagens Schema</NavItem>
      <NavItem href="/information">Information</NavItem>
    </nav>
  );
};
