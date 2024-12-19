import React from "react";
import styles from "./titleAnimation.module.css";

export default function TitleAnimation() {
  return (
    <>
      <div className={styles.topMessage}>
        Hey, welcome
        <br />
        to my corner
        <br />
        of the internet
        <br />
        I&apos;m a...
        <br />
        <h1 className={styles.topMessageHeading}>
          Creative Frontend Developer &
          <br />
          UX/UI Designer
        </h1>
      </div>
    </>
  );
}
