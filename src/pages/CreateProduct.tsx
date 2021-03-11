import { useState } from 'react';
import { useRouter } from 'next/router'

import Link from 'next/link';

import Navigation from '../components/Navigation';
import Input from '../components/Input';
import Button from '../components/Button';
import TextArea from '../components/TextArea';
import Upload from '../components/Upload';

import styles from '../styles/pages/CreateProduct.module.scss'
import api from '../services/api';

export default function CreateProduct() {
  const router = useRouter();

  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productFullname, setProductFullname] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [supply, setSupply] = useState();
  const [price, setPrice] = useState();
  const [isActive, setIsActive] = useState(true);

  const [uploadedFiles, setUploadedFIles] = useState([]);

  async function createNewProduct(e) {
    e.preventDefault();

    const showcase = new FormData();

    uploadedFiles.map(item => {
      showcase.append('showcase', item)
    })

    const data = {
      product_name: productName,
      product_fullname: productFullname,
      brand,
      description,
      supply,
      price,
      status: isActive,
      stars: 0,
    }

    try {
      await api.post('/products', data).then((response) => {
        console.log(response.data)
        setProductId(response.data.product_id);
      });

      // await api.post(`/products/images/${productId}`, showcase, {
      //   headers: {
      //     'content-type': 'multipart/form-data'
      //   }
      // }).then((response) => {
      //   console.log(response.data)
      // })

      router.push('/ListProducts');

    } catch (error) {
      console.log(error.response)
    }
  }

  function setStatusTrue(e) {
    e.preventDefault();
    console.log(isActive)

    if (isActive === true) {
      return
    }
    setIsActive(true);
  }

  function setStatusFalse(e) {
    e.preventDefault();
    console.log(isActive)
    if (isActive === false) {
      return
    }
    setIsActive(false);
  }

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
            <Link href="/ListProducts">Lista de produtos</Link>
          </header>

          <main>
            <form action="">

              <div className={styles.inputGroup}>
                <Input
                  type="text"
                  title="Titulo"
                  id="product_name"
                  value={productName}
                  onChange={e => setProductName(e.target.value)}
                />

                <Input
                  type="text"
                  title="Titulo completo"
                  id="product_fullname"
                  value={productFullname}
                  onChange={e => setProductFullname(e.target.value)}
                />

                <Input
                  type="text"
                  title="Marca"
                  id="product_brand"
                  value={brand}
                  onChange={e => setBrand(e.target.value)}
                />
              </div>

              <TextArea
                title="Descrição"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />

              <div className={styles.inputGroup}>
                <Input
                  type="number"
                  title="Estoque"
                  id="supply"
                  value={supply}
                  onChange={e => setSupply(e.target.value)}
                />

                <Input
                  type="number"
                  title="Preço"
                  id="price"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />

                <Input
                  type="number"
                  title="Avaliação"
                  id="stars"
                  min="0"
                  max="5"
                  disabled
                />

                <div className={styles.isActive}>
                  <label htmlFor="">Ativo/Inativo</label>
                  {
                    isActive ?
                      <button
                        className={styles.active}
                        onClick={setStatusFalse}
                      >
                        ATIVO
                    </button>
                      :
                      <button
                        className={styles.inactive}
                        onClick={setStatusTrue}
                      >
                        INATIVO
                    </button>
                  }
                </div>
              </div>

              <Upload />

              <div className={styles.actions}>
                <Link href="/ListProducts">Cancelar</Link>
                <Button
                  title="Salvar"
                  type="submit"
                  onClick={createNewProduct}
                />
              </div>
            </form>
          </main>

        </div>
      </div>
    </>
  )
}