import React from "react";
import styles from "./animatedFont.module.css";

export default function AnimatedFont({
  htmlAttribute,
  children,
  customStyles,
}: {
  htmlAttribute: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  customStyles: string;
}) {
  const HtmlTag = htmlAttribute as keyof JSX.IntrinsicElements;

  return (
    <HtmlTag className={`${styles.font} ${customStyles}`}>{children}</HtmlTag>
  );
}
