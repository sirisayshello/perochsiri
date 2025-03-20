import { motion } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode } from "react";

const Dot = ({ delay }: { delay: number }) => {
  return (
    <div className="w-[2px] h-2">
      <motion.span
        className="absolute text-3xl"
        animate={{ y: [-2, -6, -2] }}
        transition={{
          delay,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        .
      </motion.span>
    </div>
  );
};

export const Button = ({
  children,
  loading,
  small,
  ...props
}: {
  children: ReactNode;
  small?: boolean;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const size = small ? "p-1 pb-0 px-4 text-2xl h-9" : "p-2 px-6 text-4xl";
  return (
    <button
      {...props}
      className={`rounded-full bg-accent hover:bg-accent disabled:bg-muted w-full text-white mt-4 ${size} flex justify-center whitespace-nowrap h- `}
    >
      {loading ? (
        <div className="flex gap-[2px]">
          Sparar
          <Dot delay={0} />
          <Dot delay={0.1} />
          <Dot delay={0.2} />
        </div>
      ) : (
        children
      )}
    </button>
  );
};
