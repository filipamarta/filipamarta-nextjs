"use client";
import Header from "../components/Header";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}>
          <p>lx</p>
        </main>
      </div>
    </>
  );
}
