import styles from "./styles.module.scss"
export default function ProductCard(){
  return (
<div className={styles.wheelDetails}>
  <div className={styles.wheelImg}>
    <img src="" alt="" />
  </div>
  <div className={styles.context}>
    <div>
      <span></span>
      <h2></h2>
    </div>
    <div>
      <span>
        <strong></strong>
      </span>
      <h2></h2>
    </div>
  </div>
</div>
  );
}