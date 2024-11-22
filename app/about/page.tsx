"use client";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./page.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}>
          <section>
            <h1>Who am I?</h1>
            <Image
              src="/filipa-marta-sky1-credit-mafalda-aleixo.jpg"
              alt="Filipa Marta"
              width={1200}
              height={769}
              /*   fill */
              quality={100}
              priority
              objectPosition="top"
              className={styles.backgroundImage}
            />
          </section>
          <section>
            <p>
              I am someone who studied Microbiology (with degree and
              Master&apos;s degree) and while I was doing some science research,
              in a lab, with a white coat but no funny glasses on, I felt that I
              could do other things that also intrigued me. One of them was
              DJing. I was (and am) a melophile, always consuming music and
              talking about it all the time. So one day I decided to do a dj
              workshop with vinyl - it was great btw - and afterwards went to
              one of my favourite bars in Lisbon and I showed a paper with a
              list of songs that I wrote down, with possible suggestions for a
              possible dj night performed by me. They let me do it - omg, crazy
              idea - and I tried and felt in love till today. I performed by the
              name Phizz and I did some buzz. Currently I work with a fellow dj,
              together we DJ at alternative weddings, tailored for couples who
              avoid mainstream music - casamentocool.
            </p>
            <p>
              I took a course in Marketing and Musical Production and developed
              my dj skills, and in parallel I left my science career because (at
              least) in Portugal the science work is based in research
              scholarships that need exclusivity and my heart and mind were
              somewhere else. This happened in July 2013.
            </p>
            <p>
              I worked in event production for Match-Attack (portuguese music
              label) and Portugal Festival Awards (portuguese festival). I was a
              music critic for Fest Magazine and Rua de Baixo webzines. I attend
              to the SXSW 2014 Festival in Austin, Texas. I opened with friends
              a music publicist called Concertina, a music agency called Pinuts
              and a cultural cooperative called FWD Coop, featured by a music
              film festival called Muvi Lisboa that took place in Cinema São
              Jorge, in Lisbon, the place for independent film festivals and we
              did amazing things.
            </p>
            <p>But how I end up doing Web design and Frontend Development?</p>
            <p>
              Well, that happened with Muvi Lisboa in September 2014. The
              festival was sponsored by me and other friend, and to be able to
              do it, we invited our friends and family to help. We couldn&apos;t
              afford to pay for a website so I spent a hole month working on it,
              in wordpress, learning and creating. The end result was not bad,
              but also not good. This triggered everything else that happened
              afterwards, I took a Web Design & Interactive course.
            </p>
            <p>
              I learned and have been learning design and frontend tools,
              crafting my way. My first paid job was at Innovagency where I
              craft my UX & UI web design skills but also frontend. The rest is
              on my linkedin (Yeah, sorry for the extensive CV)
            </p>
            so one day I I learned HTML, CSS, JavaScript and PHP, and I’ve done
            three websites that you can check at “My Work” section. As a graphic
            designer, I&apos;ve done print and digital posters for events,
            concerts and dj gigs, logos for different companies, press releases.
            You can check part of them at “My Work” section or go to my Behance
            portfolio to see all those works. I am intrigued with colours,
            shapes and I want to understand why and how people are moved by
            experience digital platforms. Nowadays I continue with DJ gigs, I
            have a music agency called Pinuts and I&apos;m a freelance looking
            for better ways to growing in the design and front-end development.
            <p>
              With so many challenges it is impossible not to say that I’ve
              developed my professional skills.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
