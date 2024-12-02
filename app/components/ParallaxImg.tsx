import React from "react";
import styles from "./parallax.module.css";
import Image from "next/image";

export default function ParallaxImg({
  imageSrc,
  imageAlt,
}: {
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <div className={styles.container}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        quality={100}
        priority
        objectFit="cover"
        objectPosition="top"
        className={styles.parallax}
      />
    </div>
  );
}
