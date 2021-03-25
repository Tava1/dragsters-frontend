import { useEffect, useState, useCallback } from 'react';
import { app } from '../../services/firebase';

import styles from "../../styles/pages/ShowProducts.module.scss"
import ProductCard from "../../components/modules/ProductCard"
import Footer from "../../components/modules/Footer"
import Header from "../../components/modules/Header"

import api from '../../services/api';

export default function ShowProducts() {

  const [products, setProducts] = useState([]);
  const [showcase, setShowcase] = useState([]);
  const [imagesUrl, setImagesUrl] = useState([]);

  useEffect(() => {
    api.get('products').then((response) => {
      setProducts(response.data);
    }).catch((error) => {
      console.log(error)
    });

    api.get('showcase').then((response) => {
      setShowcase(response.data);
      console.log(showcase)
    }).catch((error) => {
      console.log(error)
    });
  }, []);

  const getImages = async () => {

    try {
      const storageRef = app.storage().ref();
      const fileRef = storageRef.child('products/770d5e4459a43fba.5d39bdcd-4c9f-417b-944b-5aef30a10d18.jpg');
      const fileURL = await fileRef.getDownloadURL()

      setImagesUrl(fileURL);
    } catch (error) {
      console.error(error);
    }
  }

  getImages();

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