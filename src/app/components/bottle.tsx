"use client";
import { motion } from "framer-motion";

export const Bottle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      drag
      dragSnapToOrigin
    >
      Bottle
    </motion.div>
  );
};
