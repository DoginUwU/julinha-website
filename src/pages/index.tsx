import Head from "next/head";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Julinha</title>
      </Head>
      <div className={styles.Container}>
        <div>
          <h1>JULINHA</h1>
          <h4>Um simples bot 100% gratuito do Discord.</h4>
        </div>
        <img src="./images/julinha.png" alt="" />
        <div className={styles.Buttons}>
          <a
            href="https://discord.com/oauth2/authorize?client_id=742876019706298568&scope=bot&permissions=8589934591"
            className={`${styles.Button} ${styles.pink}`}
          >
            ME ADICIONAR
          </a>
          <a
            href="https://discord.gg/XGgfqFAbCx"
            className={`${styles.Button} ${styles.blue}`}
          >
            <FaDiscord /> SUPORTE
          </a>
        </div>
        <div className={styles.Policys}>
          <Link href="/privacy">
            <a>Política de privacidade</a>
          </Link>
        </div>
      </div>
    </>
  );
}
