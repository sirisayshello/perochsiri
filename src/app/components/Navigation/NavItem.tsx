import Link from "next/link";
import { ReactNode } from "react";

type NavItemProps = {
  children: ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
};

export const NavItem = ({
  children,
  href,
  className,
  onClick,
}: NavItemProps) => (
  <Link
    href={href}
    onClick={onClick}
    className={`text-2xl sm:text-3xl font-fave hover:text-muted transition-colors ${className}`}
  >
    {children}
  </Link>
);
