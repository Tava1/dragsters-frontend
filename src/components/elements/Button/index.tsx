import styles from './styles.module.scss';

export default function Button({ title, ...rest }) {
  return (
    <div className={styles.container}>
      <button {...rest}>{title}</button>
    </div>
  )
}