import { Command as CommandsProps } from "../../@types/command";
import styles from "./styles.module.scss";

interface CommandProps {
  command: CommandsProps;
}

export function Command({ command }: CommandProps) {
  return (
    <div id="command_titles" className={styles.Container}>
      <h1 className={styles.title}>{command.title}</h1>
      <div
        className={styles.Content}
        dangerouslySetInnerHTML={{ __html: command.content }}
      />
    </div>
  );
}
