import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Navigation from '../components/Navigation';
import Input from '../components/Input';
import Button from '../components/Button';
import TextArea from '../components/TextArea';
import Upload from '../components/Upload';

import styles from '../styles/pages/UpdateProduct.module.scss';
import api from '../services/api';

interface Product {
  product_id: string;
  product_name: string;
  product_fullname: string,
  brand: string;
  description: string;
  stars: number;
  status: boolean;
  supply: number;
  price: string;
  showcase: [
    {
      id: string;
      filename: string;
      path: string;
    }
  ]
}

export default function UpdateProduct() {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>();
  const { id } = router.query;

  const [productId, setProductID] = useState('');
  const [productName, setProductName] = useState('');
  const [productFullname, setProductFullname] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [supply, setSupply] = useState();
  const [stars, setStars] = useState();
  const [price, setPrice] = useState();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    api.get(`/products/${id}`).then((response) => {
      const { product, showcase } = response.data
      setProduct(response.data)

      setProductID(product.product_id);
      setProductName(product.product_name);
      setProductFullname(product.product_fullname);
      setBrand(product.brand);
      setDescription(product.description);
      setSupply(product.supply);
      setPrice(product.price);
      setStars(product.stars);
      setIsActive(product.status);
    })
  }, [isActive]);

  async function updateProduct(e) {
    e.preventDefault();

    const data = {
      product_name: productName,
      product_fullname: productFullname,
      brand,
      description,
      supply,
      price,
      status: isActive
    }

    try {
      await api.put(`products/${id}`, data).then((response) => {
        console.log(response);
      });
      router.push('/ListProducts');
    } catch (error) {
      console.log(error)
    }
  }

  async function setStatusProductTrue(e) {
    e.preventDefault();

    await api.patch(`/products/${id}/true`).then((response) => {
      console.log(response.data);
      setIsActive(response.data)
    })
  }

  async function setStatusProductFalse(e) {
    e.preventDefault();

    await api.patch(`/products/${id}/false`).then((response) => {
      console.log(response.data);
      setIsActive(response.data)
    })
  }


  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.containerUpdate}>

          <header>
            <div>
              <h2>Atualiazar Produto <strong>{productId}</strong></h2>
              <p>Atualize as informações do produto.</p>
            </div>
          </header>

          {product && (
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
                    disabled
                    value={stars}
                  />

                  <div className={styles.status}>
                    <label htmlFor="">Ativo/Inativo</label>
                    {
                      isActive
                        ?
                        <button
                          className={styles.active}
                          onClick={setStatusProductFalse}
                        >
                          INATIVAR
                        </button>
                        :
                        <button
                          className={styles.inactive}
                          onClick={setStatusProductTrue}
                        >
                          REATIVAR
                        </button>
                    }
                  </div>
                </div>

                {/* <Upload /> */}

                <div className={styles.actions}>
                  <Link href="/">Cancelar</Link>
                  <Button
                    title="Salvar"
                    type="submit"
                    onClick={updateProduct}
                  />
                </div>
              </form>
            </main>
          )}

        </div>
      </div>
    </>
  )
}