import styles from '../styles/components/Button.module.scss';

export default function Button({ title, ...rest }) {
  return (
    <div className={styles.container}>
      <button {...rest}>{title}</button>
    </div>
  )
}