import { ReactNode } from "react";

export const H1 = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="font-fave text-[clamp(4rem,2.404rem+5.106vw,7rem)]">
      {children}
    </h1>
  );
};
