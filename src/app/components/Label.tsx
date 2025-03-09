import { HTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";

export const Label = ({
  children,
  ...props
}: { children: ReactNode } & LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      className="flex items-center justify-end text-4xl font-foxrights text-accent text-right"
      {...props}
    >
      {children}
    </label>
  );
};
