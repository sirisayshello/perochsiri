import { ReactNode, SelectHTMLAttributes } from "react";

export const Select = ({
  children,
  ...props
}: { children: ReactNode } & SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <select className="rounded-full px-6 text-xl font-sans" {...props}>
      {children}
    </select>
  );
};
