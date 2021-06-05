import styles from "../styles/error.module.scss";

export default function Custom404() {
  return (
    <div className={styles.Container}>
      <h1>
        <span>404</span> | Página não encontrada
      </h1>
    </div>
  );
}
