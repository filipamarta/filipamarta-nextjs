import React from "react";
import styles from "./titleAnimation.module.css";
import Link from "next/link";

export default function TitleAnimation() {
  return (
    <>
      <h1 className={styles.topMessage}>
        Hey, welcome
        <br />
        to my corner
        <br />
        of the internet
        <br />
        as a <br />
        <span>
          <Link href="/webdesign">Creative</Link>
        </span>
        <br />
        <span>
          <Link href="/frontend">Frontend Developer</Link>
        </span>
        <br />
        and
        <span>
          <Link href="/lisbon">UX/UI Designer</Link>
        </span>
      </h1>
    </>
  );
}
