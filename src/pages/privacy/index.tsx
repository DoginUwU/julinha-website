import Head from "next/head";
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";

import styles from "./styles.module.scss";

export default function Privacy({ privacy }) {
  return (
    <>
      <Head>
        <title>Julinha | Privacidade</title>
      </Head>
      <div className={styles.Container}>
        <h1>{privacy.title}</h1>
        <time>{privacy.updatedAt}</time>
        <div
          className={styles.Content}
          dangerouslySetInnerHTML={{ __html: privacy.content }}
        />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.getSingle("privacypage", {});
  console.log(response);

  const privacy = {
    slug: "privacypage",
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.description),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return {
    props: { privacy },
    revalidate: 60 * 60 * 24 * 10, // 60s 60m 24h 10d
  };
};
