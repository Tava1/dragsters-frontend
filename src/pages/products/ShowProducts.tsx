import { useEffect, useState } from 'react';
import { app } from '../../services/firebase';

import styles from "../../styles/pages/ShowProducts.module.scss"
import ProductCard from "../../components/modules/ProductCard"
import Footer from "../../components/modules/Footer"
import Header from "../../components/modules/Header"

import api from '../../services/api';

export default function ShowProducts() {

  const [products, setProducts] = useState([]);
  const [imagesUrl, setImagesUrl] = useState([]);

  useEffect(() => {
    api.get('products').then((response) => {
      setProducts(response.data);
    }).catch((error) => {
      console.log(error)
    });
  }, []);

  const getImages = async () => {

    const storageRef = app.storage().ref();
    const fileRef = storageRef.child('products/30c1c40900b666ce.af05c15f-57fb-4f1b-b31e-f11f6cbe11fe.jpg');
    const fileURL = await fileRef.getDownloadURL()

    setImagesUrl(fileURL);
  }

  return (
    <>
      <Header />

      <div className={styles.hero}>
        <div className={styles.banner}></div>
        <div className={styles.logo}>
          <img src="/assets/images/vossen-logo.png" alt="Vossen" />
        </div>
      </div>

      <div onLoad={getImages} className={styles.container}>
        <div className={styles.grid}>

          {products ? products.map(product => (
            <ProductCard
              id={product.product_id}
              showcase={imagesUrl}
              title={product.product_name}
              fullTitle={product.product_fullname}
              price={product.price}
              brand={product.brand}
            />
          )) : <p>Nao tem nada</p>}
        </div>
      </div>

      <Footer />
    </>
  )
}