import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaEye, FaEllipsisV } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import SearchBar from '../components/SearchBar';
import Navigation from '../components/Navigation';

import api from '../services/api';

import styles from '../styles/pages/ListProducts.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ListProducts() {
  const classes = useStyles();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products').then((response) => {
      setProducts(response.data);
    });

  }, []);

  return (
    <>
      <Navigation />

      <div className={styles.container}>
        <div className={styles.containerList}>

          <header className={styles.listContext}>
            <div>
              <h2>Produtos <strong>{products.length}</strong></h2>
              <p>Gerenciamento de produtos cadastrados no sistema.</p>
            </div>
            <SearchBar />
            <Link href="/">Novo Produto</Link>
          </header>

          {products.length > 0 ?
            <main className={styles.containerListProducts}>
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
                as 20h. A                <div className={styles.actions}>
                  <span>AÇÕES</span>
                </div>
              </div>

              {products && products.map(product => (
                <div className={styles.listBody}>
                  <div className={styles.line}>
                    <div className={styles.id}>
                      <span>###</span>
                    </div>
                    <div className={styles.title}>
                      <span>{product.product_name}</span>
                    </div>
                    <div className={styles.description}>
                      <span>{product.product_fullname}</span>
                    </div>
                    <div className={styles.rating}>
                      <span>{product.stars}</span>
                    </div>
                    <div className={styles.supply}>
                      <span>{product.supply}</span>
                    </div>
                    <div className={styles.price}>
                      <span>R${product.price}</span>
                    </div>
                    <div className={styles.status}>
                      {
                        product.status
                          ? <button>Ativar</button>
                          : <button>Desativar</button>
                      }
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
              ))}
            </main>

            : <p>Nenhum registro foi encontrado. Realize o cadastro de novos produtos.</p>}

          <footer>
            <div className={classes.root}>
              <Pagination count={20} variant="outlined" shape="rounded" />
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}