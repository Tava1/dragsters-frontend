import { FaEye, FaEllipsisV } from 'react-icons/fa';

import SearchBar from '../components/SearchBar';
import Navigation from '../components/Navigation';

import styles from '../styles/pages/ListProducts.module.css'

export default function ListProducts() {
  return (
    <>
      <Navigation />

      <div className={styles.container}>

        <div className={styles.containerList}>

          <div>
            <h2>Produtos <strong>452</strong></h2>
            <p>Gerenciamento de produtos cadastrados no sistema.</p>
            <SearchBar />
          </div>

          <div className={styles.containerListProducts}>
            <div className={styles.listHeader}>
              <div className={styles.id}>
                <span>#ID</span>
              </div>
              <div className={styles.title}>
                <span>TITULO</span>
              </div>
              <div className={styles.description}>
                <span>DESCRIÇÃO</span>
              </div>
              <div className={styles.rating}>
                <span>AVALIAÇÃO</span>
              </div>
              <div className={styles.supply}>
                <span>ESTOQUE</span>
              </div>
              <div className={styles.price}>
                <span>PREÇO</span>
              </div>
              <div className={styles.status}>
                <span>ATIVO/INATIVO</span>
              </div>
              <div className={styles.actions}>
                <span>AÇÕES</span>
              </div>
            </div>

            <div className={styles.listBody}>
              <div className={styles.line}>
                <div className={styles.id}>
                  <span>#1</span>
                </div>
                <div className={styles.title}>
                  <span>HF-3</span>
                </div>
                <div className={styles.description}>
                  <span>Hybrid Forged Series</span>
                </div>
                <div className={styles.rating}>
                  <span>5</span>
                </div>
                <div className={styles.supply}>
                  <span>251</span>
                </div>
                <div className={styles.price}>
                  <span>R$ 1.000,00</span>
                </div>
                <div className={styles.status}>
                  <button>On/Off</button>
                </div>
                <div className={styles.actions}>

                  <a href="#">
                    <FaEye size={20} />
                  </a>
                  <a href="#">
                    <FaEllipsisV size={20} />
                  </a>
                </div>
              </div>

              <div className={styles.line}>
                <div className={styles.id}>
                  <span>#1</span>
                </div>
                <div className={styles.title}>
                  <span>HF-3</span>
                </div>
                <div className={styles.description}>
                  <span>Hybrid Forged Series</span>
                </div>
                <div className={styles.rating}>
                  <span>5</span>
                </div>
                <div className={styles.supply}>
                  <span>251</span>
                </div>
                <div className={styles.price}>
                  <span>R$ 1.000,00</span>
                </div>
                <div className={styles.status}>
                  <button>On/Off</button>
                </div>
                <div className={styles.actions}>

                  <a href="#">
                    <FaEye size={20} />
                  </a>
                  <a href="#">
                    <FaEllipsisV size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.pagination}>
            1231
          </div>
        </div>
      </div>
    </>
  )
}