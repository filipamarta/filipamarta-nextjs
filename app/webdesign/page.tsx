"use client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>webdesign</h1>
          <section></section>
        </main>
      </div>
      <Footer />
    </>
  );
}
