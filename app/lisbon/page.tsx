"use client";
import Header from "../components/header/Header";
import styles from "./page.module.css";
import Cursor from "../components/cursor/Cursor";
import Footer from "../components/footer/Footer";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const content = {
  title: "Lisbon, the city where I was born",
  paragraphs: [
    "Some time ago, I compiled a list of things I love about the city. Whenever I find myself chatting with friends or acquaintances who are planning a visit, I like to share it with them.",
    "And why not share it here, with all of you — people and bots alike — who wander through this corner of the internet?",
    "So, here it is: Happy adventures in the hidden gems of Lisbon!",
  ],
};

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Page() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 900 });

  const left = useTransform(
    scrollYProgress,
    [0, 1],
    ["calc(0vw + (0px))", "calc(100vw + -230px)"]
  );
  console.log(isDesktopOrLaptop);

  return (
    <>
      <div className={styles.page}>
        <Header />
        <main className={styles.main} ref={ref}>
          <motion.section
            className={styles.hero}
            style={{ position: "relative", left, x: -200, bottom: -y }}
          >
            <Image
              src="/backgroundImg-lisbon2.jpg"
              alt="Lisbon"
              width={1200}
              height={769}
              quality={100}
              priority
              className={styles.backgroundImage}
            />
          </motion.section>
          <section className={styles.textContainer}>
            <motion.h1
              initial={{ y: 50, opacity: 0, scale: 1.2 }}
              whileInView={{
                y: isDesktopOrLaptop ? -100 : 0,
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true }}
            >
              {parse(content.title)}
            </motion.h1>
            {content.paragraphs.map((paragraph, i) => {
              return (
                <motion.p
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: { duration: 1, delay: 0.3 * i },
                  }}
                  viewport={{ amount: "10%" }}
                  key={i}
                >
                  {parse(paragraph)}
                </motion.p>
              );
            })}

            <motion.div
              className={styles.buttonContainer}
              initial={{ y: -100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.5 },
              }}
              viewport={{ amount: "10%" }}
            >
              <Link
                href="https://maps.app.goo.gl/JDpATAny3te2cbnQ6"
                passHref={true}
                className="button-type"
                target="_blank"
              >
                Lisbon (Google Map)
              </Link>
            </motion.div>
          </section>
        </main>
        <Footer />
      </div>
      <Cursor />
    </>
  );
}
