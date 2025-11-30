import React, { JSX } from "react";
import styles from "./animatedFont.module.css";

type AnimatedFontProps = {
  htmlAttribute: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  customStyles: string;
};

export default function AnimatedFont({
  htmlAttribute,
  children,
  customStyles,
}: AnimatedFontProps) {
  const HtmlTag = htmlAttribute;

  return (
    <HtmlTag className={`${styles.font} ${customStyles}`}>{children}</HtmlTag>
  );
}
