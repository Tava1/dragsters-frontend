import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

import { FaCartPlus } from 'react-icons/fa'

import Header from '../components/modules/Header';
import Button from '../components/elements/Button';

import styles from '../styles/pages/Showcase.module.scss';

import api from '../services/api';

export default function Showcase() {
  const router = useRouter();

  const [product, setProduct] = useState(null);

  const { id } = router.query

  useEffect(() => {
    api.get(`/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <section className={styles.adminNavBar}>
        <div>
          <Link href="/ListProducts">Lista de produtos</Link>
        </div>
      </section>
      {product && (
        <main className={styles.container}>

          <div className={styles.showcaseImages}>
            <div className={styles.mainImage}>
              {/* <img src={`${product.showcase[0].path}\/${product.showcase[0].filename}`} alt="" /> */}
              <img src="/assets/mainWheelTest.jpg" alt="TEst" />
            </div>
            <div className={styles.images}>
              <div>
                <img src="/assets/thumbnailWheelTest.jpg" alt="TEst" />
              </div>
              <div>
                <img src="/assets/thumbnailWheelTest.jpg" alt="TEst" />
              </div>
              <div>
                <img src="/assets/thumbnailWheelTest.jpg" alt="TEst" />
              </div>
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
                  <img src="/assets/starsWheel.svg" alt="1" />
                  <img src="/assets/starsWheel.svg" alt="2" />
                  <img src="/assets/starsWheel.svg" alt="3" />
                  <img src="/assets/starsWheel.svg" alt="4" />
                  <img src="/assets/starsWheel.svg" alt="5" />
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
              <Button title="ADICIONAR AO CARRINHO" />
            </div>
          </div>
        </main>
      )}


      <section className={styles.moreAd}>
        <div>
          <h3>Ande baixo, mas ande com estilo.</h3>
        </div>
      </section>

      <footer>
        <span>footer</span>
      </footer>
    </>
  );
}