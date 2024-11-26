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
        as a{" "}
        <span>
          <Link href="/webdesign">Creative</Link>
        </span>
        <br />
        <span>
          <Link href="/frontend">Frontend Developer</Link>
        </span>
        <br />
        based in{" "}
        <span>
          <Link href="/lisbon">Lisbon</Link>
        </span>
      </h1>
    </>
  );
}
