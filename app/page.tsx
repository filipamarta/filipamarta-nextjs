"use client";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import PaintAnimation from "./components/paintAnimation/PaintAnimation";
import Footer from "./components/footer/Footer";
import TitleAnimation from "./components/titleAnimation/TitleAnimation";
import ParallaxText from "./components/parallaxText/ParallaxText";
import GridProjects from "./components/gridProjects/GridProjects";
import Cursor from "./components/cursor/Cursor";

export default function Page() {
  return (
    <>
      <div className={styles.page}>
        <Header />
        <main className={styles.main}>
          <div className={styles.titleAnimationContainer}>
            <TitleAnimation />
          </div>
          <section className={styles.parallaxTextContainer}>
            <ParallaxText baseVelocity={-7}>my name is</ParallaxText>
            <ParallaxText baseVelocity={5}>Filipa Marta</ParallaxText>
          </section>
          <section className={styles.about}>
            <p>I’m passionate about creating digital objects.</p>
            <p>
              As Maurizio Nannucci’s neon artwork says, “Changing place,
              Changing time, Changing thoughts, Changing future.” This resonates
              with my journey, originally a microbiologist, to DJing, creating a
              music film festival, establishing a music agency, and founding a
              cultural cooperative. Eventually, I discovered my passion for web
              design and then frontend development, where I&apos;ve been
              thriving for the past seven years.
            </p>
            <p>
              I’m also dedicated to accessibility, design systems, and cool
              animations — always striving to make the digital world better for
              everyone.
            </p>
          </section>
          <GridProjects />
        </main>
        <Footer backgroundColorVar="--color-neutral-100" />
      </div>

      <PaintAnimation />
      <Cursor />
    </>
  );
}
