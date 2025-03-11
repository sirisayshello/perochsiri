'use client'

import Link from "next/link";
import { ReactNode, use, useState } from "react";
import { useIsAdmin } from "../hooks/useIsAdmin";

export const NAV_HEIGHT = 48;

type NavItemProps = { children: ReactNode; href: string; className?: string; onClick?: () => void; }

const NavItem = ({ children, href, className, onClick }: NavItemProps) => (
  <Link
    href={href}
    onClick={onClick}
    className={`text-2xl sm:text-3xl font-fave hover:text-muted transition-colors ${className}`}
  >
    {children}
  </Link>
);

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const isAdmin = useIsAdmin();

  const sharedClasses = "rounded-full h-1 w-7 bg-accent duration-500 ease-in-out";

  const close = () => setOpen(false);

  return (
    <>
      <div
        className="md:hidden flex absolute top-3 right-3 gap-1 flex-col z-10 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className={`${sharedClasses} ${open ? "rotate-45 translate-y-[8px]" : "rotate-0"} transition-transform`} />
        <div className={`${sharedClasses} ${open ? "opacity-0 translate-x-2" : "opacity-1"} transition-all`} />
        <div className={`${sharedClasses}  ${open ? "-rotate-45 -translate-y-[8px]" : "rotate-0"} transition-transform`} />
      </div>
      <nav style={{
        boxShadow: open ? "0px 5px 12px var(--accentShadow)" : "",
      }} className={`duration-500 absolute top-0 w-full h-full p-10 bg-background gap-6 right-0 flex transition-all flex-col items-center justify-center ${open ? "" : "translate-x-full"}`}>
        <NavItem onClick={close} className="text-4xl" href="/onskelista">Önskelista</NavItem>
        <NavItem onClick={close} className="text-4xl" href="/schema">Dagens Schema</NavItem>
        <NavItem onClick={close} className="text-4xl" href="/rsvp">OSA</NavItem>
        <NavItem onClick={close} className="text-4xl" href="/information">Information</NavItem>
        {isAdmin && <NavItem onClick={close} className="text-4xl" href="/guestlist">Gästlista</NavItem>}
      </nav>
      <nav
        style={{
          boxShadow: "0px -5px 12px var(--accentShadow)",
        }}
        className="hidden md:flex justify-evenly fixed z-10 top-0 w-full p-2 bg-background"
      >
        <NavItem href="/onskelista">Önskelista</NavItem>
        <NavItem href="/schema">Dagens Schema</NavItem>
        <NavItem href="/rsvp">OSA</NavItem>
        <NavItem href="/information">Information</NavItem>
      </nav>
    </>
  );
};
