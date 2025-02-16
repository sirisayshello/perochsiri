"use client";
import { motion } from "framer-motion";
type BottleProps = {
  rotation: number;
  dragRotation: number;
};

export const Bottle = ({ rotation, dragRotation }: BottleProps) => {
  return (
    <motion.img
      src="/bottle.png"
      alt="bottle"
      className="w-8 lg:w-12"
      initial={{ opacity: 0, scale: 0.5, rotate: rotation }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      drag
      dragSnapToOrigin
      whileDrag={{ scale: 1.2, rotate: dragRotation }}
    />
  );
};
