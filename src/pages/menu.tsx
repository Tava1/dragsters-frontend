import Link from 'next/link';
import { FaUser, FaProductHunt } from 'react-icons/fa';

import Header from '../components/modules/Header';
import Footer from '../components/modules/Footer';

import styles from '../styles/pages/Menu.module.scss'

export default function Menu() {

  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.containerMenu}>
          <div className={styles.grid}>
            <div className={styles.item}>
              <Link href="/users/List">
                <a>
                  <FaUser size={90} />
                  <h3>Usuários</h3>
                </a>
              </Link>
            </div>

            <div className={styles.item}>
              <Link href="/products/List">
                <a>
                  <FaProductHunt size={90} />
                  <h3>Produtos</h3>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}