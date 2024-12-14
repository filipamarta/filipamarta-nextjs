"use client";
import { useEffect, useRef } from "react";
import Cursor from "../components/Cursor";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./page.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import parse from "html-react-parser";

const aboutContent = [
  {
    title:
      "I was in a lab, after graduating as a <strong>microbiologist</strong>.",
    paragraphs: [
      "I was working with butterflies, mice, zebra fish and other scientists. Wearing a white coat. But, while I enjoyed the work, I felt other things calling. Things that had nothing to do with science. I finally decided to leave that career behind because science work in Portugal is based on research scholarships that require exclusivity and, as <i>I flirted with DJing</i>, it became increasingly clear that my heart and mind were somewhere else. This happened in July 2013.",
      "(<i> There's a whole detour about my love of music and where it led me. I'll get to that.</i>*)",
    ],
  },
  {
    title:
      "Cut to September 2014, when my friends and I were organizing the first music-based film festival in Portugal (<i>really!</i>).",
    paragraphs: [
      "It was called <strong>Muvi Lisboa</strong> and it filled the historic <strong>Cinema São Jorge</strong>, which is also home to IndieLisboa, DocLisboa and MoteLX, with films about music, music videos, talks, concerts, DJ sets and parties.",
      "We had a lot on our plate, and not a lot of money – that's how <strong>I ended up spending a whole month working on a website</strong> that tried to live up to the line-up of the festival we created, even though I had never developed or designed anything for the Web before. I used Wordpress. The end result was not bad, but I can't say that it was good either.",
      "This was the <i>spark</i> for everything that happened afterwards: I took a <strong>Web Design & Interactive course</strong>, my professional life in these fields started and I’ve been crafting my way through since then.",
    ],
  },
  {
    title:
      "I got my start at my <i>third</i> and <i>fourth careers</i> at Lisbon-based digital agencies Innovagency and Wingman.",
    paragraphs: [
      "(<i>what about the second? read through until the end and remember I told you I really like music.</i>)",
      "I entered Innovagency as a <strong>web designer</strong>, doing <strong>UX/UI</strong>, and when I moved on to Wingman I had already become the <strong>creative front-end developer</strong> I am today.",
      "I later went from junior to mid-level <strong>frontend developer</strong> as I passed through Opplane (a US startup), and landed first at Tamanna (a Kuwait startup) and then at Holisticon AG (a German consultancy).",
      "As for my favourite tools: for Design I currently work with Figma, Balsamiq, MockFlow and Miro (in the past I also worked with Sketch, Adobe Illustrator and Photoshop); for Frontend I use React, React Native, NextJS, Typescript, Javascript, CSS, HTML5, Framer-motion, Testing Library, Wordpress, Bootstrap, Kirby CMS, Flutter and Angular. I have a certification in <strong>Scrum</strong>, and I’m all about <strong>accessibility</strong>, <strong>Design Systems</strong>, and <strong>cool animations</strong>.",
    ],
  },
  {
    title:
      "On this, <em>my very own corner of the Internet</em>, you can find some things that I designed and developed over the years.",
    paragraphs: [
      "Some are corporate projects I developed while I was employed by different companies (<i>and you can guess there's a lot of work that I'm not able to show here, either for confidentiality reasons or because it was done in collaboration with other people – the things I show are those in which I worked alone, no one else's design or front end work is on display here</i>).",
      "Others are very personal designs (posters, flyers, logos or websites) that I did for myself, for community projects I was involved in or for friends.",
      "I first developed and designed a website to showcase my work in 2015, using HTML, CSS and JavaScript. This is that website: revamped. This time around I'm using NextJS, TypeScript, React and some Motion.",
      "<i>I hope you like it.</i>",
      "* <i>Thank you for reading down this far.</i>",
    ],
  },
  {
    title: "So: about my <i>love of music</i>.",
    paragraphs: [
      "I was (and am) a music lover. Which one day I led me to decide to do a <strong>DJing</strong> workshop with vinyl – it was great btw. With my head in the clouds, I walked into one of my favourite bars in Lisbon and I showed them a piece of paper with a list of songs that I wrote down, an outline of a night where I would be the DJ. They let me do it – crazy idea –, <i>I fell in love</i>.",
      "I performed as <strong>Phizz</strong> and generated some buzz. I worked a lot, all over Lisbon, especially in queer spaces, and for a while there was a small and lovely crowd following me around. These days I go more for the afternoons. I also play at weddings tailored for couples who avoid mainstream music, a duo with my friend Filipe, aka Castor Mateus, that we call <strong>casamentocool</strong>.",
      "<i>So is this what I called my second career? Maybe.</i>",
      "You can add <strong>producing events</strong> to that. I took a Marketing and Musical Production course, and I worked as event producer (Match-Attack, Portugal Festival Awards). Along with friends and fellow music aficionados, I opened a <strong>music PR company</strong>, Concertina, a <strong>music agency</strong> Pinuts, and a <strong>cultural cooperative</strong> FWD Coop (the one that organized MUVI, the festival I told you about).",
      "I was one of the organizers of the 2019 edition of the Festival Feminista de Lisboa, for which, besides helping produce 80 events in the city, I also designed and developed the website (now unfortunately gone) and print communication.",
    ],
  },
];

export default function Page() {
  const heroImageRef = useRef<HTMLImageElement>(null);

  const fadeInUpWithScale = {
    initial: { y: 0, opacity: 0, scale: 1.2 },
    whileInView: {
      y: -100,
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  const fadeInUp = {
    initial: { y: 0, opacity: 0 },
    whileInView: {
      y: -100,
      opacity: 1,
      transition: { duration: 1 },
      delay: 1.5,
    },
  };

  useEffect(() => {
    const imgElement = heroImageRef.current;

    if (imgElement) {
      const initialScale = 1;
      const minScale = 0.3;
      const maxScroll = 500;

      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const easingFactor = 3;

        if (scrollTop <= maxScroll) {
          // Calculate the scale factor
          const scale = Math.max(
            minScale,
            initialScale - Math.pow(scrollTop / maxScroll, 1 / easingFactor)
          );

          // Apply the scale transform
          imgElement.style.transform = `translate3d(0, 0, 0) scale(${scale}, ${scale})`;
        } else {
          // After reaching minScale, move upward
          const offsetY = (scrollTop - maxScroll) / 1; // Adjust speed of upward movement
          imgElement.style.transform = `translate3d(0, -${Math.min(
            offsetY,
            window.innerHeight
          )}px, 0) scale(${minScale}, ${minScale})`;
        }
      };

      // Attach scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <div className={styles.page}>
        <Header />

        <main className={styles.main}>
          <section className={styles.hero}>
            <Image
              src="/filipa-marta-sky1-credit-mafalda-aleixo.jpg"
              alt="Filipa Marta"
              width={1200}
              height={769}
              quality={100}
              priority
              className={styles.backgroundImage}
              ref={heroImageRef}
            />
          </section>

          <motion.section
            className={styles.textContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            <motion.h1
              variants={fadeInUpWithScale}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              About Me
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              How did I end up doing <strong>Frontend Development</strong> and{" "}
              <strong>UX/UI Design</strong>?
            </motion.h2>

            {aboutContent.map((content, i) => {
              const { title, paragraphs } = content;
              return (
                <motion.article
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  key={i}
                >
                  <h3>{parse(title)}</h3>

                  {paragraphs.map((paragraph, index) => (
                    <p key={index}>{parse(paragraph)}</p>
                  ))}
                </motion.article>
              );
            })}
          </motion.section>
        </main>
        <Footer />
      </div>

      <Cursor />
    </>
  );
}
