import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/modules/Header';
import Footer from '../../components/modules/Footer';

import CheckoutSteps from '../../components/modules/CheckoutSteps';
import { Title, Grid, Cart, Shipping, Summary } from '../../styles/pages/CustomersCartStep';
import CartItem from '../../components/modules/CartItem';
import { useCart } from '../../hooks/CartContext';
import { useAuth } from '../../hooks/AuthContext';

import api from '../../services/api';

interface ShippingResponse {
  Codigo: string,
  EntregaDomiciliar: string,
  EntregaSabado: string,
  Erro: string,
  MsgErro: string,
  PrazoEntrega: string,
  Valor: string,
  ValorAvisoRecebimento: string,
  ValorMaoPropria: string,
  ValorSemAdicionais: string,
  ValorValorDeclarado: string,
  obsFim: string,
}

interface DeliveryAddressResponse {
  id: string;
  fullname: string;
  zip_code: string;
  address: string;
  number: string;
  neighborhood: string;
  complement: string;
  city: string;
  state: string;
  reference_point: string;
  primary: boolean
  customers_id: string;
  created_at: Date;
  updated_at: Date;
}

const CartStep = () => {
  const { cart, cartTotal, handleShippingPrice, shippingPrice } = useCart();
  const [deliveryZipCode, setDeliveryZipCode] = useState("");
  const [calculatedShipping, setCalculatedShipping] = useState<ShippingResponse[]>([]);
  const [selectedShippingOption, setSelectedShippingOption] = useState(0);
  const [deliveryAdresses, setDeliveryAdresses] = useState<DeliveryAddressResponse[]>([])

  const { customer, token } = useAuth();
  const router = useRouter();

  const getZipCode = (zipCode) => {
    if (String(zipCode).length === 8)
      setDeliveryZipCode(String(zipCode));
  };

  useEffect(() => {
    if (customer) {
      api.get(`/customer/delivery-address/${customer.id}`).then(response => {
        setDeliveryAdresses(response.data);
      })
    }
  }, []);

  useEffect(() => {
    if (deliveryZipCode.length === 8) {
      api.get(`/calculate-shipping/${deliveryZipCode}`).then(response => {
        setCalculatedShipping(response.data);
      }).catch(error => {
        console.error(error);
      });
    }
  }, [deliveryZipCode]);

  useEffect(() => {
    const shippingOption = calculatedShipping[selectedShippingOption]?.Valor ? calculatedShipping[selectedShippingOption]?.Valor : "0,00"
    handleShippingPrice(Number(shippingOption.replace(',', '.')))
  }, [selectedShippingOption]);

  const handleLoggedUser = () => {
    if (token && cart.length >= 1) {
      router.push('/products/address-step')
    }
    else if (cart.length <= 0) {
      // TODO: Criar tooltip
      console.log('Não é possível prosseguir com o carrinho vazio!');
    }
    else if (!token)
      router.push('/customers/login')
  };

  return (
    <>
      <Header />

      <CheckoutSteps step={1} />

      {/* Produto */}
      <Title>
        <h2>Meu Carrinho</h2>
      </Title>

      <Grid className="grid">
        <Cart>
          <div className="products">
            {cart.map((cartItem, index) => (
              <CartItem
                index={index}
                amount={cartItem.amount}
                product_id={cartItem.product.product_id}
                key={cartItem.product.product_id}
                image={cartItem.showcase[0]?.path}
                brand={cartItem.product.brand}
                price={cartItem.product.price}
                fullname={cartItem.product.product_fullname}
              />
            ))}
          </div>
        </Cart>

        {/* <!-- Calcular frete --> */}

        <Shipping>
          <label htmlFor="cep">CALCULE O FRETE</label>
          <div className="shipping-input">
            <input
              name="cep"
              id="cep"
              type="tel"
              placeholder="DIGITE SEU CEP"
              required
              onChange={e => getZipCode(e.target.value)}
              defaultValue={deliveryAdresses[0]?.zip_code ? deliveryAdresses[0]?.zip_code : ""}
            />
          </div>

          {
            calculatedShipping && (
              <div className="shipping-result">
                <h3>OPÇÕES DE FRETE</h3>
                <div className="options">

                  {
                    calculatedShipping.map((shipping, index) => (
                      <div key={index}>
                        <input
                          type="radio"
                          id={`shipping-${index}`}
                          name="shipping"
                          value={index}
                          onChange={e => setSelectedShippingOption(Number(e.target.value))}
                          required
                        />
                        <label htmlFor={`shipping-${index}`}>{`${shipping.PrazoEntrega} dias úteis - R$ ${shipping.Valor}`}</label>
                      </div>
                    ))}
                </div>
              </div>
            )
          }

        </Shipping>


        {/* Resumo do pedido */}

        <Summary>
          <h2>RESUMO DO PEDIDO</h2>

          <div className="line"></div>

          {/* subtotal */}
          <div className="subtotal">
            <h3>Subtotal</h3>
            <div>
              <p>Frete</p>
              <span>R$ {shippingPrice ? shippingPrice : '0,00'}</span>

            </div>

            <div>
              <p>Total dos produtos</p>
              <span>R$ {cartTotal ? cartTotal : '0,00'}</span>
            </div>
          </div>

          <div className="line"></div>

          {/* total */}
          <div className="total">
            <h3>Total</h3>
            <div>
              <span><strong>R$ {cartTotal ? cartTotal + shippingPrice : '0,00'}</strong> em até 12x</span>
              <span>ou 1x <strong>R$ {cartTotal ? cartTotal + shippingPrice : '0,00'}</strong></span>
            </div>
          </div>

          <div className="btn">
            <button
              onClick={handleLoggedUser}
            >
              PROSSEGUIR
            </button>
          </div>
        </Summary>
      </Grid>

      <Footer />
    </>
  );
}

export default CartStep;