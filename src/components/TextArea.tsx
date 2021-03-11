import styles from '../styles/components/TextArea.module.scss';

export default function TextArea({ title, ...rest }) {
  return (
    <div className={styles.container}>
      <label htmlFor="">{title}</label>
      <textarea {...rest}></textarea>
    </div>
  )
}