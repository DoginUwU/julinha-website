import styles from "../styles/error.module.scss";

export default function Custom500() {
  return (
    <div className={styles.Container}>
      <h1>
        <span>500</span> | Um erro ocorreu no servidor
      </h1>
    </div>
  );
}
