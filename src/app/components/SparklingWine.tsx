import { HTMLAttributes } from "react";

export const SparklingWine = ({ className }: { className?: string }) => {
  return (
    <img
      src="/images/sparkling-wine.png"
      alt="Sparking wine"
      className={className}
    />
  );
};
