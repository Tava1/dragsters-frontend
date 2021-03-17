import styles from '../styles/components/Input.module.scss';

export default function Input({ register, title, ...rest }) {

  return (
    <div className={styles.container}>
      <label htmlFor={title}>{title}</label>
      <input
        {...rest}
        ref={register}
      />
    </div>
  );
}