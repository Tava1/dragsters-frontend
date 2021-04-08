import Link from 'next/link';
import styles from "./styles.module.scss"

export default function ProductCard({ title, count, description, buttonTitle, buttonPath }) {

  return (
    <section className={styles.container}>
      <div>
        <h2>{title} <strong>{count}</strong></h2>
        <p>{description}</p>
      </div>

    </section>
  );
}