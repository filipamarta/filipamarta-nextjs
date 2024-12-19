import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import AnimatedFont from "../animatedFontWeight/AnimatedFont";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <AnimatedFont htmlAttribute="li" customStyles={styles.link}>
            <Link href="/">Home</Link>
          </AnimatedFont>
          {/* <AnimatedFont htmlAttribute="li" customStyles={styles.link}>
            <Link href="/projects">Projects</Link>
          </AnimatedFont> */}
          <AnimatedFont htmlAttribute="li" customStyles={styles.link}>
            <Link href="/about">About</Link>
          </AnimatedFont>
          <AnimatedFont htmlAttribute="li" customStyles={styles.link}>
            <Link href="/lisbon">Lisbon</Link>
          </AnimatedFont>
        </ul>
      </nav>
    </header>
  );
}
