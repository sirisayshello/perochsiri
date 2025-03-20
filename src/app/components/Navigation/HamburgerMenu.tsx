import { useState } from "react";
import { NavItem } from "./NavItem";
import { useIsAdmin } from "@/app/hooks/useIsAdmin";

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const isAdmin = useIsAdmin();

  const close = () => setOpen(false);
  const sharedClasses =
    "rounded-full h-1 w-7 bg-accent duration-500 ease-in-out";

  return (
    <>
      <div
        className="flex fixed top-3 right-3 p-1 gap-1 flex-col z-10 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div
          className={`${sharedClasses} ${
            open ? "rotate-45 translate-y-[8px]" : "rotate-0"
          } transition-transform`}
        />
        <div
          className={`${sharedClasses} ${
            open ? "opacity-0 translate-x-2" : "opacity-1"
          } transition-all`}
        />
        <div
          className={`${sharedClasses}  ${
            open ? "-rotate-45 -translate-y-[8px]" : "rotate-0"
          } transition-transform`}
        />
      </div>
      <nav
        style={{
          boxShadow: open ? "0px 5px 12px var(--accentShadow)" : "",
        }}
        className={`duration-500 fixed top-0 w-full h-full p-10 bg-background gap-6 right-0 flex transition-all flex-col items-center justify-center ${
          open ? "" : "translate-x-full"
        }`}
      >
        <NavItem onClick={close} className="text-4xl" href="/rsvp">
          OSA
        </NavItem>
        <NavItem onClick={close} className="text-4xl" href="/schema">
          Dagens Schema
        </NavItem>
        <NavItem onClick={close} className="text-4xl" href="/information">
          Information
        </NavItem>
        <NavItem onClick={close} className="text-4xl" href="/onskelista">
          Önskelista
        </NavItem>
        {isAdmin && (
          <NavItem onClick={close} className="text-4xl" href="/guestlist">
            Gästlista
          </NavItem>
        )}
      </nav>
    </>
  );
};
