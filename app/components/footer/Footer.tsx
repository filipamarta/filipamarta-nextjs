import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInnerContainer}>
        <h3>
          Say hey
          <br />
          <span>filipa.marta@gmail.com</span>
        </h3>
        <ul className={styles.socialMedia}>
          <li>
            <Link
              href={"https://www.linkedin.com/in/filipa-marta"}
              target="_blank"
            >
              <Image
                className={styles.customIcon}
                src="/icon-linkedin.svg"
                alt="Filipa on LinkedIn"
                width={16}
                height={16}
                priority
                aria-hidden
              />{" "}
              /in/filipa-marta
            </Link>
          </li>
          <li>
            <Link href={"https://github.com/filipamarta"} target="_blank">
              <Image
                className={styles.customIcon}
                src="/icon-github.svg"
                alt="Filipa on Github"
                width={16}
                height={16}
                priority
                aria-hidden
              />{" "}
              /filipamarta
            </Link>
          </li>
          <li>
            <Link href={"https://www.behance.net/filipamarta"} target="_blank">
              <Image
                className={styles.customIcon}
                src="/icon-behance.svg"
                alt="Filipa on Behance"
                width={16}
                height={16}
                priority
                aria-hidden
              />{" "}
              /filipamarta
            </Link>
          </li>
          <li>
            <Link href={"https://dribbble.com/filipamarta"} target="_blank">
              <Image
                className={styles.customIcon}
                src="/icon-dribbble.svg"
                alt="Filipa on Dribbble"
                width={16}
                height={16}
                priority
                aria-hidden
              />{" "}
              /filipamarta
            </Link>
          </li>
          <li>
            <Link href={"https://www.mixcloud.com/_Phizz/"} target="_blank">
              <Image
                className={styles.customIcon}
                src="/icon-mixcloud.svg"
                alt="Filipa on Mixcloud"
                width={16}
                height={16}
                priority
                aria-hidden
              />{" "}
              /_Phizz
            </Link>
          </li>
          <li>
            <Link href={"mailto:filipa.marta@gmail.com"} target="_blank">
              <Image
                className={styles.customIcon}
                src="/icon-email.svg"
                alt="Filipa's email"
                width={16}
                height={16}
                priority
                aria-hidden
              />{" "}
              filipa.marta@gmail.com
            </Link>
          </li>
        </ul>
        <p className={styles.copyright}>© 2024 Filipa Marta, made with 🫶</p>
      </div>
    </footer>
  );
}
