"use client";
import Header from "../components/Header";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}>
          <p>frontend</p>
          {/* <Image
              src="/filipa-marta-sky1-credit-mafalda-aleixo.jpg"
              alt="Filipa Marta"
              width={1200}
              height={769}
               fill
              quality={100}
              priority
              objectPosition="top"
              className={styles.backgroundImage}
            /> */}
        </main>
      </div>
    </>
  );
}
