import { HTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";

export const Label = ({
  children,
  className,
  ...props
}: { children: ReactNode } & LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      className={`text-4xl font-foxrights text-accent ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};
