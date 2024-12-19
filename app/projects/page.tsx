"use client";
import Cursor from "../components/cursor/Cursor";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import styles from "./page.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className={styles.page}>
        <Header />
        <main className={styles.main}>
          <h1>Selected Projects WIP</h1>
          <section>
            <div>
              <div className={styles.imgContainer}>
                <Image src="/projects/wild-trivia/wildtrivia.png" alt="" fill />
              </div>
            </div>
            <div></div>
          </section>
          <section>
            <div></div>
            <div></div>
          </section>
        </main>
        <Footer />
      </div>
      <Cursor />
    </>
  );
}
