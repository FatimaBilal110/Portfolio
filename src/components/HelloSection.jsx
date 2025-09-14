"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const HelloSection = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 5000); // Hide after 5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 300, opacity: 0 }}
          transition={{ duration: 1 }}
        className="fixed bottom-0 left-10 z-50"
        >
          <div className="flex flex-col items-center">
            {/* Your transparent GIF */}
            <Image
              src="Images/intro.gif" // put in public/
              alt="Hello character"
              width={250}
              height={250}
              unoptimized // prevents Next.js from breaking GIF animation
            />
            <span className="font-bold text-lg bg-yellow-200 px-3 py-1 rounded-lg mt-2 shadow">
              Hello!
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HelloSection;
