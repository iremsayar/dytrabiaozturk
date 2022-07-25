import React, { useEffect, useState } from "react";
import Sun from "../../assets/lotties/sun/data";
import { motion } from "framer-motion";

export const AnimationLogo = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }, [height, width]);

  return (
    <motion.div className="absolute top-0 w-full h-screen flex justify-center items-center z-50 bg-white">
      <motion.div
        initial={{
          width: "13rem",
          height: "13rem",
        }}
        animate={{
          width: "16rem",
          height: "16rem",
        }}
        transition={{
          duration: 5,
        }}
        className="mb-24"
      >
        <Sun />
      </motion.div>
    </motion.div>
  );
};
