import { useState } from 'react';
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Link from 'next/link';
import crypto from 'crypto';

import Header from '../../components/modules/Header';
import Input from '../../components/elements/Input';
import Button from '../../components/elements/Button';
import TextArea from '../../components/elements/TextArea';

import styles from '../../styles/pages/CreateProduct.module.scss'
import api from '../../services/api';
import { app } from '../../services/firebase';

interface ProductCreated {
  product_id: string;
  product_name: string;
  product_fullname: string,
  brand: string;
  description: string;
  stars: number;
  status: boolean;
  supply: number;
  price: string;
}

const FIREBASE_PATH_PRODUCTS = "products/"

export default function Create() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [isActive, setIsActive] = useState<Boolean>(true);
  const [productCreated, setProductCreated] = useState<ProductCreated>({} as ProductCreated);

  const handleNewProduct = async (data) => {
    const {
      images,
      ...rest
    } = data;

    rest.status = isActive;
    rest.stars = 0;

    await api.post('/products', rest).then((response) => {
      setProductCreated(response.data);
    }).catch((error) => {
      console.error(error);
    })
  };

  const handleAddImages = async (data) => {
    const {
      images,
    } = data;

    if (productCreated.product_id === undefined)
      return
    else
      console.log('Enviando arquivos para o firebase...')

    const filenames = [];
    const paths = [];

    const id = productCreated.product_id;

    try {
      const storageRef = app.storage().ref();

      for (let i = 0; i < images.length; i++) {
        const [, extension] = images[i].name.split('.');

        const fileHash = crypto.randomBytes(8).toString('hex');
        const filename = `${fileHash}.${id}.${extension}`;

        filenames.push(filename);

        const fileRef = storageRef.child(`${FIREBASE_PATH_PRODUCTS}${filename}`);

        await fileRef.put(images[i]).then((respoense) => {
          console.log(respoense);
        }).catch((error) => {
          console.error(error);
        });

        const fileURL = await fileRef.getDownloadURL();
        paths.push(fileURL);
      };
    } catch (error) {
      console.error(error)
    }

    // TODO: Mudar o path para o camninho/url da imagem
    const showcaseData = {
      product_id: id,
      filenames,
      paths,
      thumbnail: false,
    };

    console.log(showcaseData);

    api.post('/showcase', showcaseData).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error(error);
    });
  };

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
          <section>
            <div>
              <h2>Novo Produtos</h2>
              <p>Reúna as informações necessárias e cadastre um novo produto.</p>
            </div>
            <Link href="/products/List">Lista de produtos</Link>
          </section>

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

              <div className={styles.actions}>
                <Link href="/products/List">Cancelar</Link>
                <Button
                  title="Próximo"
                  type="submit"
                />
              </div>

            </form>

            <form onSubmit={handleSubmit(handleAddImages)}>
              <Input
                name="images"
                type="file"
                title="Fotos"
                id="images"
                multiple
                register={register}
              />

              <div className={styles.actions}>
                <Link href="/products/List">Cancelar</Link>
                <Button
                  title="Finalizar"
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