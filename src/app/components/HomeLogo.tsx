"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const HomeLogo = () => {
  const path = usePathname();

  const x = path === "/" ? -100 : 0;
  const delay = path === "/" ? 0.6 : 0.3;

  return (
    <Link href="/">
      <motion.div
        animate={{ x }}
        transition={{ delay }}
        className="font-fave absolute text-4xl p-2"
      >
        Siri & Per
      </motion.div>
    </Link>
  );
};
