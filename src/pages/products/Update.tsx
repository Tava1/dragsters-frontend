import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Header from '../../components/modules/Header';
import Input from '../../components/elements/Input';
import Button from '../../components/elements/Button';
import TextArea from '../../components/elements/TextArea';

import styles from '../../styles/pages/UpdateProduct.module.scss';
import api from '../../services/api';
import { useForm } from 'react-hook-form';

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

export default function Update() {
  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const [product, setProduct] = useState<Product | null>();
  const { id } = router.query;

  const [productId, setProductID] = useState('');
  const [productName, setProductName] = useState('');
  const [productFullname, setProductFullname] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [supply, setSupply] = useState(0);
  const [stars, setStars] = useState(0);
  const [price, setPrice] = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {

    try {
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
      });
    } catch (error) {
      console.log(error);
    }
  }, []);


  const handleUpdateProduct = useCallback(async (data) => {

    data.status = isActive;

    try {
      await api.put(`products/${id}`, data).then((response) => {
        console.log(response);
      });
      router.push('/products/List');
    } catch (error) {
      console.log(error)
    }

  }, []);

  const setStatus = (e) => {
    e.preventDefault();

    if (isActive) {
      setIsActive(false);
      console.log(`to false: ${isActive}`)
      return;
    }
    setIsActive(true);
    console.log(`to true: ${isActive}`)
  }

  return (
    <>
      <Header />
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
              <form onSubmit={handleSubmit(handleUpdateProduct)}>

                <div className={styles.inputGroup}>
                  <Input
                    name="product_name"
                    type="text"
                    title="Titulo"
                    id="product_name"
                    register={register}
                    defaultValue={productName}
                  />

                  <Input
                    name="product_fullname"
                    type="text"
                    title="Titulo completo"
                    id="product_fullname"
                    register={register}
                    defaultValue={productFullname}
                  />

                  <Input
                    name="brand"
                    type="text"
                    title="Marca"
                    id="product_brand"
                    register={register}
                    defaultValue={brand}
                  />
                </div>

                <TextArea
                  name="description"
                  title="Descrição"
                  defaultValue={description}
                  register={register}
                />

                <div className={styles.inputGroup}>
                  <Input
                    name="supply"
                    type="number"
                    title="Estoque"
                    id="supply"
                    defaultValue={supply}
                    register={register}
                  />

                  <Input
                    name="price"
                    type="number"
                    title="Preço"
                    id="price"
                    defaultValue={price}
                    register={register}
                  />

                  <Input
                    name="stars"
                    type="number"
                    title="Avaliação"
                    id="stars"
                    disabled
                    defaultValue={stars}
                    register={register}
                  />

                  <div className={styles.status}>
                    <label>Ativo/Inativo</label>
                    {
                      isActive
                        ?
                        <button
                          className={styles.active}
                          onClick={setStatus}
                        >
                          INATIVAR
                        </button>
                        :
                        <button
                          className={styles.inactive}
                          onClick={setStatus}
                        >
                          REATIVAR
                        </button>
                    }
                  </div>
                </div>

                <div className={styles.actions}>
                  <Link href="/">Cancelar</Link>
                  <Button
                    title="Salvar"
                    type="submit"
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