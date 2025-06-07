"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode, useEffect, useState } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
}

const AnimatedSection = ({ children }: AnimatedSectionProps) => {
  const [threshold, setThreshold] = useState(0.2);

  useEffect(() => {
    const updateThreshold = () => {
      const isMobile = window.innerWidth <= 768;
      setThreshold(isMobile ? 0.01 : 0.2);
    };

    updateThreshold();
    window.addEventListener("resize", updateThreshold);
    return () => window.removeEventListener("resize", updateThreshold);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
