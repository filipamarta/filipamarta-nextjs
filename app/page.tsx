"use client";
import styles from "./page.module.css";
import Header from "./components/Header";
import About from "./components/About";
import PaintAnimation from "./components/PaintAnimation";
import Footer from "./components/Footer";
import TitleAnimation from "./components/TitleAnimation";
import ParallaxText from "./components/ParallaxText";
import GridProjects from "./components/GridProjects";
import Cursor from "./components/Cursor";

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
