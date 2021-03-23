import styles from "./styles.module.scss"

export default function ProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles.showcase}>
        <img src="/assets/images/roda-rotiform.png" alt="Roda" />
      </div>
      <div className={styles.context}>
        <div className={styles.header}>
          <span>LHR</span>
          <h2>LHR-F</h2>
        </div>
        <div className={styles.footer}>
          <span><strong>R$ 2.000,00</strong>/CADA</span>
          <h2>ROTIFORM</h2>
        </div>
      </div>
    </div>
  );
}