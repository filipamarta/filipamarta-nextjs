"use client";

import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const SpecialText = ({ children }: { children: string }) => {
  const letters = children.split("");
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(0)}
    >
      {letters.map((letter, index) => {
        if (letter === " ") {
          return (
            <span key={index} className="w-[0.3em]">
              &nbsp;
            </span>
          );
        } else {
          return (
            <HoverableLetter mouseX={mouseX} letter={letter} key={index} />
          );
        }
      })}
    </motion.div>
  );
};

function HoverableLetter({
  mouseX,
  letter,
}: {
  mouseX: MotionValue;
  letter: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const fontWeightSync = useTransform(mouseX, [-220, 0, 220], [100, 900, 100]);
  const fontWeight = useSpring(fontWeightSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.span ref={ref} style={{ fontWeight }}>
      {letter}
    </motion.span>
  );
}

export default SpecialText;
