import { ButtonHTMLAttributes, ReactNode } from "react";

export const Button = ({
  children,
  ...props
}: { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className="rounded-full bg-accent w-full text-white p-2 px-6 mt-4 text-4xl flex justify-center"
    >
      {children}
    </button>
  );
};
