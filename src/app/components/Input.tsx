import { InputHTMLAttributes } from "react";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="rounded-full w-48 p-2 px-6 text-lg font-sans"
      {...props}
    />
  );
};
