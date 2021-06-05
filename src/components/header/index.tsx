// styles
import styles from "./styles.module.scss";
// components
import { ActiveLink } from "../activeLink";
import { SignInButton } from "../singInButton";

export function Header() {
  return (
    <header className={styles.Container}>
      <div className={styles.Content}>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Inicio</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/commands">
            <a>Comandos</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
