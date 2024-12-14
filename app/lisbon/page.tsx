"use client";
import Header from "../components/Header";
import styles from "./page.module.css";
import Cursor from "../components/Cursor";
import Footer from "../components/Footer";
import parse from "html-react-parser";
import Link from "next/link";

const content = {
  title: "Lisbon is the city where I was born.",
  paragraphs: [
    "A while ago I made a list of the things I love about the city and whenever I happen to be in conversation and know that friends and acquaintances are coming to visit, I share it with them.",
    "And why not share it with you, people and bots who appear in this corner of the internet?",
    "Let's do it, happy adventures in the nooks and crannies of Lisbon.",
  ],
};

export default function Page() {
  return (
    <>
      <div className={styles.page}>
        <Header />
        <main className={styles.main}>
          <section className={styles.textContainer}>
            <h1>{parse(content.title)}</h1>
            {content.paragraphs.map((paragraph, i) => {
              return <p key={i}>{parse(paragraph)}</p>;
            })}

            <Link
              href="https://maps.app.goo.gl/JDpATAny3te2cbnQ6"
              passHref={true}
              className="button-type"
              target="_blank"
            >
              Lisbon (Google Map)
            </Link>
          </section>
        </main>
        <Footer />
      </div>
      <Cursor />
    </>
  );
}
