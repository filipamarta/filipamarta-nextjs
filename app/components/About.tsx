import React from "react";
import styles from "./about.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div>
        <p>I’m passionate about creating digital objects.</p>
        <p>
          As Maurizio Nannucci’s neon artwork says, “Changing place, Changing
          time, Changing thoughts, Changing future.” This resonates with my
          journey, originally a microbiologist, to DJing, creating a music film
          festival, establishing a music agency, and founding a cultural
          cooperative. Eventually, I discovered my passion for web design and
          then frontend development, where I've been thriving for the past seven
          years.
        </p>
        <p>
          I’m also dedicated to accessibility, design systems, and cool
          animations — always striving to make the digital world better for
          everyone.
        </p>
      </div>
    </section>
  );
}
