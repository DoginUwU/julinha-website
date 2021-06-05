import Head from "next/head";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
// styles
import styles from "./styles.module.scss";
// types
import { Command as CommandProps } from "../../@types/command";
// services
import { getPrismicClient } from "../../services/prismic";
import { useState } from "react";
import { Command } from "../../components/command";
import { Link as ScrollLink } from "react-scroll";

interface CommandsProps {
  commands: Array<CommandProps>;
}

export default function Commands({ commands }: CommandsProps) {
  const [selectedCommand, setSelectedCommand] = useState(commands[0]);

  return (
    <>
      <Head>
        <title>Julinha | Comandos</title>
      </Head>
      <div className={styles.Container}>
        <div className={styles.commands}>
          <h1>Comandos</h1>
          <div className={styles.content}>
            {commands.map((command) => (
              <ScrollLink
                to="command_title"
                spy={true}
                smooth={true}
                key={command.slug}
                activeClass="active"
              >
                <p
                  className={
                    selectedCommand.slug === command.slug ? styles.active : ""
                  }
                  onClick={() => setSelectedCommand(command)}
                >
                  {command.title}
                </p>
              </ScrollLink>
            ))}
          </div>
        </div>
        <Command command={selectedCommand} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    Prismic.Predicates.at("document.type", "commands")
  );

  const commands = response.results.map((result) => {
    return {
      slug: result.slugs[0],
      title: RichText.asText(result.data.title),
      content: RichText.asHtml(result.data.content),
      updatedAt: new Date(result.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });
  return {
    props: { commands },
    revalidate: 60 * 60 * 5, // 60s 60m 5h
  };
};
