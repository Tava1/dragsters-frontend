import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import Header from '../../components/modules/Header';
import Footer from '../../components/modules/Footer';
import Button from '../../components/elements/Button';

import api from '../../services/api';

import styles from '../../styles/pages/Detail.module.scss';

export default function Detail() {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const { id } = router.query

  useEffect(() => {
    api.get(`/products/${id}`).then((response) => {
      setProduct(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      {product && (
        <main className={styles.container}>

          <div className={styles.showcaseImages}>
            <div className={styles.mainImage}>
              <img src={product.showcase[0]?.path} alt={product.product.product_fullname} />
            </div>
            <div className={styles.images}>
              {product.showcase.map((img, index) => (
                <div key={index}>
                  <img src={img.path} alt={product.product.product_fullname} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.showcaseInfo}>
            <div className={styles.title}>
              <h2>{product.product.product_name}</h2>
              <p>{product.product.product_fullname}</p>
            </div>
            <div className={styles.specs}>
              <div>
                <span>MARCA</span>
                <div className={styles.line}></div>
                <span><strong>{product.product.brand}</strong></span>
              </div>
              <div>
                <span>AVALIAÇÃO</span>
                <div className={styles.line}></div>
                <div className={styles.stars}>
                  {/* <img src="/assets/starsWheel.svg" alt="1" />
                  <img src="/assets/starsWheel.svg" alt="2" />
                  <img src="/assets/starsWheel.svg" alt="3" />
                  <img src="/assets/starsWheel.svg" alt="4" />
                  <img src="/assets/starsWheel.svg" alt="5" /> */}
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <p>{product.product.description}</p>
            </div>
            <div className={styles.price}>
              <span><strong>R$ {product.product.price}</strong>/CADA</span>
            </div>

            <div className={styles.actions}>
              <Button title="COMPRAR" />
              <Button
                title="ADICIONAR AO CARRINHO"
              />
            </div>
          </div>
        </main>
      )}

      <Footer />
    </>
  );
}