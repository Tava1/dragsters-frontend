import { useState, useCallback } from 'react';
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Link from 'next/link';

import Header from '../../components/modules/Header';
import Input from '../../components/elements/Input';
import Button from '../../components/elements/Button';
import TextArea from '../../components/elements/TextArea';
import Upload from '../../components/elements/Upload';

import styles from '../../styles/pages/CreateProduct.module.scss'
import api from '../../services/api';

export default function Create() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [isActive, setIsActive] = useState(true);

  const [uploadedFiles, setUploadedFIles] = useState([]);

  const handleNewProduct = useCallback(async (data) => {
    data.status = isActive;
    data.stars = 0;

    try {
      await api.post('/products', data).then((response) => {
        router.push('/products/List');
      });
    } catch (error) {
      console.log(error.response)
    }

  }, []);

  const setStatus = (e) => {
    e.preventDefault();

    if (isActive) {
      setIsActive(false);
      return;
    }
    setIsActive(true);
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.containerCreate}>
          <header>
            <div>
              <h2>Novo Produtos</h2>
              <p>Reúna as informações necessárias e cadastre um novo produto.</p>
            </div>
            <Link href="/products/List">Lista de produtos</Link>
          </header>

          <main>
            <form onSubmit={handleSubmit(handleNewProduct)}>
              <div className={styles.inputGroup}>
                <Input
                  name="product_name"
                  type="text"
                  title="Titulo"
                  id="product_name"
                  register={register}
                />

                <Input
                  name="product_fullname"
                  type="text"
                  title="Titulo completo"
                  id="product_fullname"
                  register={register}
                />

                <Input
                  name="brand"
                  type="text"
                  title="Marca"
                  id="product_brand"
                  register={register}
                />
              </div>

              <TextArea
                name="description"
                title="Descrição"
                register={register}
              />

              <div className={styles.inputGroup}>
                <Input
                  name="supply"
                  type="number"
                  title="Estoque"
                  id="supply"
                  register={register}
                />

                <Input
                  name="price"
                  type="number"
                  title="Preço"
                  id="price"
                  register={register}
                />

                <Input
                  name="stars"
                  type="number"
                  title="Avaliação"
                  id="stars"
                  min="0"
                  max="5"
                  disabled
                  value="0"
                  register={register}
                />

                <div className={styles.isActive}>
                  <label htmlFor="">Ativo/Inativo</label>
                  {
                    isActive ?
                      <button
                        className={styles.active}
                        onClick={setStatus}
                      >
                        ATIVO
                    </button>
                      :
                      <button
                        className={styles.inactive}
                        onClick={setStatus}
                      >
                        INATIVO
                    </button>
                  }
                </div>
              </div>

              <Upload />

              <div className={styles.actions}>
                <Link href="/products/List">Cancelar</Link>
                <Button
                  title="Salvar"
                  type="submit"
                />
              </div>
            </form>
          </main>

        </div>
      </div>
    </>
  )
}