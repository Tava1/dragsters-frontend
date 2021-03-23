import styles from "../../styles/pages/ShowProducts.module.scss"
import ProductCard from "../../components/modules/ProductCard"
import Footer from "../../components/modules/Footer"
import Header from "../../components/modules/Header"

export default function ShowProducts() {
  return (
    <>
      <Header />

      <div className={styles.hero}>
        <div className={styles.banner}></div>
        <div className={styles.logo}>
          <img src="/assets/images/vossen-logo.png" alt="Vossen" />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <Footer />


    </>
  )
}