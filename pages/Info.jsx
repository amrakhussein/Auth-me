import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About| Try Auth!</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Home page| welcome here!</h1>
        <h3>This is Info...</h3>
        <p>
          more info Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Impedit tenetur nam vero quaerat, eum rerum! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Rerum illum id nulla nisi sint
          odit?
        </p>
      </main>
    </div>
  );
}
