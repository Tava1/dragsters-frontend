import styles from "../../styles/pages/ShowProducts.module.scss"
import ProductCard from "../../components/modules/ProductCard"
import Footer from "../../components/modules/Footer"

export default function ShowProducts(){
  return (
    <>
      <div className={styles.hero}>
        <img src="/assets/" alt=""/>
        <img src="#" alt=""/>
      </div>
      <div className={styles.productsList}>
        <Footer />
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </>
  )
}