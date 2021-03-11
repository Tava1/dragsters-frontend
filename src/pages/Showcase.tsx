import { useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa'

import Navigation from '../components/Navigation';
import Button from '../components/Button';

import styles from '../styles/pages/Showcase.module.scss';

import api from '../services/api';

export default function () {

  const [product, setProduct] = useState(null);

  const id = '940b7241-35a7-48e1-b43a-8311585e6019'

  useEffect(() => {
    api.get(`/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, []);

  return (
    <>
      <Navigation />
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
            <h2>{product && product.product.product_name}</h2>
            <p>{product && product.product.product_fullname}</p>
          </div>
          <div className={styles.specs}>
            <div>
              <span>MARCA</span>
              <div className={styles.line}></div>
              <span><strong>VOSSEN</strong></span>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere nesciunt quibusdam, molestiae molestias nihil saepe officiis laudantium laboriosam at similique exercitationem ex a quia aspernatur id facilis. Est, odit.</p>
          </div>
          <div className={styles.price}>
            <span><strong>R$ {product && product.product.price}</strong>/CADA</span>
          </div>

          <div className={styles.actions}>
            <Button title="COMPRAR" />
            <Button title="ADICIONAR AO CARRINHO" />
          </div>
        </div>
      </main>

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