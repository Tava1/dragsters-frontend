import Link from 'next/link';

import Navigation from '../components/Navigation';
import Input from '../components/Input';
import Button from '../components/Button';
import TextArea from '../components/TextArea';
import Upload from '../components/Upload';

import styles from '../styles/pages/CreateProduct.module.scss'

export default function CreateProduct() {

  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.containerCreate}>

          <header>
            <div>
              <h2>Novo Produtos</h2>
              <p>Reúna as informações necessárias e cadastre um novo produto.</p>
            </div>
          </header>

          <main>
            <form action="">

              <div className={styles.inputGroup}>
                <Input
                  type="text"
                  title="Titulo"
                  id="product_name"
                />

                <Input
                  type="text"
                  title="Titulo completo"
                  id="product_fullname"
                />

                <Input
                  type="text"
                  title="Marca"
                  id="product_brand"
                />
              </div>

              <TextArea title="Descrição" />

              <div className={styles.inputGroup}>
                <Input
                  type="number"
                  title="Estoque"
                  id="supply"
                />

                <Input
                  type="number"
                  title="Preço"
                  id="price"
                />

                <Input
                  type="number"
                  title="Avaliação"
                  id="stars"
                />

                <div className={styles.isActive}>
                  <label htmlFor="">Ativo/Inativo</label>
                  {
                    true ? <button className={styles.active}>ATIVO</button> : <button className={styles.inactive}>INATIVO</button>
                  }
                </div>
              </div>

              <Upload />

              <div className={styles.actions}>
                <Link href="/">Cancelar</Link>
                <Button title="Salvar" type="submit" />
              </div>
            </form>
          </main>

        </div>
      </div>
    </>
  )
}