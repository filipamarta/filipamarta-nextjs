import React from "react";
import styles from "./gridProjects.module.css";
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

export default function GridProjects() {
  return (
    <section className={styles.container}>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: -50,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        Selected Projects
      </motion.h2>

      <motion.ul
        className={styles.projectsList}
        transition={{
          staggerChildren: 0.1,
        }}
      >
        {projects.map((project, index) => {
          const { name, href, imgHeight, imgSrc, imgWidth, videoSrc } = project;

          if (imgSrc) {
            return (
              <motion.li
                key={index}
                className={styles.project}
                initial={{ scale: 0.5, y: 50, opacity: 0 }}
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  mass: 3,
                  stiffness: 400,
                  damping: 50,
                }}
                whileHover={{
                  scale: 1.01,
                  transition: { duration: 0.2 },
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
                key={index}
                className={`${styles.project} ${styles.video}`}
                initial={{ scale: 0.5, y: 50, opacity: 0 }}
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  mass: 3,
                  stiffness: 400,
                  damping: 50,
                }}
                whileHover={{
                  scale: 1.01,
                  transition: { duration: 0.2 },
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
