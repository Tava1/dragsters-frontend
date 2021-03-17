import styles from './styles.module.scss';

export default function TextArea({ register, title, ...rest }) {
  return (
    <div className={styles.container}>
      <label htmlFor="">{title}</label>
      <textarea
        {...rest}
        ref={register}
      >
      </textarea>
    </div>
  )
}