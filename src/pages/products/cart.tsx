import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { FaTrash, FaSearch } from 'react-icons/fa';

import Header from '../../components/modules/Header';
import Footer from '../../components/modules/Footer';
import Button from '../../components/elements/Button';

import api from '../../services/api';

import CheckoutSteps from '../../components/modules/CheckoutSteps';
import { Title, Grid, Cart, Shipping, Summary } from '../../styles/pages/CustomersCart';
import CartItem from '../../components/modules/CartItem';
import { useCart } from '../../hooks/CartContext';

export default function Detail() {

  const { cart } = useCart();

  return (
    <>
      <Header />

      <CheckoutSteps />

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
            <input name="cep" id="cep" type="tel" placeholder="DIGITE SEU CEP" required />
            <button>
              <FaSearch />
            </button>
          </div>

          <div className="shipping-result">
            <h3>SELECIONE O FRETE *</h3>
            <div className="options">
              <div>
                <input type="radio" id="shipping-1" name="shipping" value="1" required />
                <label htmlFor="shipping-1">20 dias úteis - R$ 100,00</label>
              </div>

              <div>
                <input type="radio" id="shipping-2" name="shipping" value="2" required />
                <label htmlFor="shipping-2">30 dias úteis - R$ 60,00</label>
              </div>
            </div>
          </div>
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
              <span>R$ 123,12</span>
            </div>

            <div>
              <p>Total dos produtos</p>
              <span>R$ 44.000,00</span>
            </div>
          </div>

          <div className="line"></div>

          {/* total */}
          <div className="total">
            <h3>Total</h3>
            <div>
              <span><strong>R$ 44.123,12</strong> em até 12x</span>
              <span>ou 1x <strong>R$ 44.123,12</strong></span>
            </div>
          </div>

          <div className="btn">
            <button>PROSSEGUIR</button>
          </div>
        </Summary>
      </Grid>

      <Footer />
    </>
  );
}