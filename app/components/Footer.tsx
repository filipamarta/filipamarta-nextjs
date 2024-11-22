import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInnerContainer}>
        <h3>
          Say hey
          <br />
          <span>filipa.marta@gmail.com</span>
        </h3>
        <ul>
          <li>
            {/* <Image src="" alt="Social media" width={40} height={40} /> */}
          </li>
          <li>
            {/* <Image src="" alt="Social media" width={40} height={40} /> */}
          </li>
          <li>
            {/* <Image src="" alt="Social media" width={40} height={40} /> */}
          </li>
          <li>
            {/* <Image src="" alt="Social media" width={40} height={40} /> */}
          </li>
          <li>
            {/* <Image src="" alt="Social media" width={40} height={40} /> */}
          </li>
        </ul>
        <p>
          Copyright 2024 made with lot&apos;s of love and magic by me, Filipa
        </p>
      </div>
    </footer>
  );
}
