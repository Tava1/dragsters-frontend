import styles from "./styles.module.scss"

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loadIcon}>
        <img src="/assets/images/load-wheel.svg" alt="Loading..." />
      </div>
    </div>
  )
}