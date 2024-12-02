import React, { useEffect } from "react";
import styles from "./projects.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    href: "https://louvadeus.pt/",
    name: "Louva-a-Deus website",
    videoSrc: "/projects/louvaADeus/louva-a-deus_720.mp4",
  },
  {
    href: "https://www.behance.net/gallery/43598491/CASUAR-A3-poster-FB-cover",
    name: "Casuar poster design",
    imgSrc: "/projects/posters/casuar-poster.jpg",
    imgWidth: 1200,
    imgHeight: 1336,
  },

  {
    href: "https://www.casamentocool.pt",
    name: "Casamento Cool website",
    videoSrc: "/projects/casamentocool/casamentocool_1080.mp4",
  },
  {
    href: "https://concertomaisalto.pt/",
    name: "Mais Alto! website",
    imgSrc: "/projects/mais-alto/mais-alto-cover.png",
    imgWidth: 479,
    imgHeight: 269,
  },
  {
    href: "https://minta.me/",
    name: "Minta & The Brook Trout website",
    videoSrc: "/projects/minta/minta_1080.mp4",
  },
  {
    href: "https://github.com/filipamarta/the-weather-station-app",
    name: "Weather Station website",
    imgSrc: "/projects/weather-station/capa_behance_weather-station.png",
    imgWidth: 1500,
    imgHeight: 1182,
  },
  {
    href: "https://www.behance.net/gallery/100041737/Wild-Trivia-Frontend-Dev-Design-with-ReactJS",
    name: "Wild Trivia game",
    imgSrc: "/projects/wild-trivia/wildtrivia.png",
    imgWidth: 879,
    imgHeight: 492,
  },
];

export default function Projects() {
  useEffect(() => {}, []);

  return (
    <section className={styles.container}>
      <motion.h2
        initial={{ y: 0, opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: -100,
          transition: {
            duration: 2,
          },
        }}
        viewport={{ once: true }}
      >
        Selected Projects
      </motion.h2>

      <motion.ul className={styles.projectsList}>
        {projects.map((project, index) => {
          const { name, href, imgHeight, imgSrc, imgWidth, videoSrc } = project;

          if (imgSrc) {
            return (
              <motion.li
                style={{ gridArea: `element${index}` }}
                key={index}
                className={styles.project}
                initial={{ y: 200, opacity: 0, scale: 0.5 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  y: -200,
                  rotate: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.2,
                    duration: 2,
                  },
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotate: 0,
                  transition: { duration: 0.2 },
                  zIndex: 2,
                }}
              >
                <Link href={href} target="_blank">
                  <figure>
                    <Image
                      src={imgSrc}
                      alt={name}
                      width={imgWidth}
                      height={imgHeight}
                      quality="100"
                    />
                    <figcaption>
                      <h3>{name}</h3>
                    </figcaption>
                  </figure>
                </Link>
              </motion.li>
            );
          } else {
            return (
              <motion.li
                style={{ gridArea: `element${index}` }}
                key={index}
                className={`${styles.project} ${styles.video}`}
                initial={{ y: 200, opacity: 0, scale: 0.5 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  y: -200,
                  rotate: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.2,
                    duration: 2,
                  },
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotate: 0,
                  transition: { duration: 0.2 },
                  zIndex: 2,
                }}
              >
                <Link href={href} target="_blank">
                  <figure>
                    <video width="100%" autoPlay loop muted>
                      <source src={videoSrc} type="video/mp4" />
                      Your browser does not support the video tag
                    </video>
                    <figcaption>
                      <h3>{name}</h3>
                    </figcaption>
                  </figure>
                </Link>
              </motion.li>
            );
          }
        })}
      </motion.ul>
    </section>
  );
}
