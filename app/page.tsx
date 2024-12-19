"use client";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import About from "./components/About";
import PaintAnimation from "./components/paintAnimation/PaintAnimation";
import Footer from "./components/footer/Footer";
import TitleAnimation from "./components/titleAnimation/TitleAnimation";
import ParallaxText from "./components/parallaxText/ParallaxText";
import GridProjects from "./components/GridProjects";
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
          <About />
          <GridProjects />
        </main>
        <Footer />
      </div>

      <PaintAnimation />
      <Cursor />
    </>
  );
}
