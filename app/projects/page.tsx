"use client";
import Header from "../components/Header";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>Selected Projects WIP</h1>

          <section>
            <div></div>
            <div></div>
          </section>
        </main>
      </div>
    </>
  );
}
