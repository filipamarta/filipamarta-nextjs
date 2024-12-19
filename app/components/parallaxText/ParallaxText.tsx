import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { wrap } from "@motionone/utils";
import styles from "./parallaxText.module.css";

/* This was made using an example from motion, adapted to don't have the continues movement https://codesandbox.io/p/sandbox/framer-motion-scroll-velocity-r1dy4u?file=%2Fsrc%2FApp.tsx%3A74%2C2&from-embed */

export default function ParallaxText({
  children,
  baseVelocity = 100,
}: {
  children: string;
  baseVelocity: number;
}) {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, (scroll) => {
    const smoothScrolling = 0.05;
    const value = (-scroll * smoothScrolling) / baseVelocity;
    return `${wrap(-20, -45, value)}%`;
  });

  return (
    <div className={styles.parallax}>
      <motion.div className={styles.scroller} style={{ x: x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}
