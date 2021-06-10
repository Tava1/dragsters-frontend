import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { FaCheckCircle, FaCreditCard } from 'react-icons/fa'
import { AiOutlineBarcode } from 'react-icons/ai'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Header from '../../components/modules/Header';
import Footer from '../../components/modules/Footer';
import Input from '../../components/elements/Input';
import Dropdown from '../../components/elements/Dropdown';
import Button from '../../components/elements/Button';
import CheckoutSteps from '../../components/modules/CheckoutSteps';

import { useCart } from '../../hooks/CartContext';
import { useAuth } from '../../hooks/AuthContext';

import { Title, Container, Summary } from '../../styles/pages/ProductsPaymentStep';

import api from '../../services/api';

const schema = yup.object().shape({
  card_number: yup.string().min(13, 'Número do cartão inválido.').max(16, 'Número do cartão inválido.').required('Campo obrigatório.').typeError('O número do cartão deve ser válido.'),
  card_fullname: yup.string().required('Campo obrigatório.'),
  card_validity: yup.date().required('Campo obrigatório.').typeError('Insira uma data válida.'),
  card_security_code: yup.string().min(3, 'Código de segurança inválido.').max(4, 'Código de segurança inválido.').required('Campo obrigatório.').typeError('O CVV deve ser válido.'),
});

const PaymentStep = () => {
  const { cart, cartTotal, shippingPrice, deliveryAddressId, setCompletedOrder } = useCart();
  const { customer } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const [paymentSelectedOption, setPaymentSelectedOption] = useState(0);
  const router = useRouter();

  const handleCheckout = async () => {
    const data = {
      order: {
        shipping: shippingPrice,
        total: cartTotal,
        customers_id: customer.id,
        delivery_address_id: deliveryAddressId
      },
      order_detail: cart.map(product => ({
        product_id: product.product.product_id,
        amount: product.amount
      })),
    }

    await api.post('/order', data).then(response => {
      setCompletedOrder(response.data);
      router.push('/products/completed-order');
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <>
      <Header />

      <CheckoutSteps step={3} />

      <Title>
        <h2>Resumo da compra</h2>
      </Title>

      <Summary>
        <div className="delivery-address">
          <h2>Gustavo Santos</h2>
          <p>Augusto, 123</p>
          <p>Casa</p>
          <p>Analia Franco</p>
          <span>São Paulo, SP - 08465-020</span>
        </div>
        <div className="context">
          <div className="subtotal">
            <h3>Subtotal</h3>
            <div>
              <p>Frete</p>
              <span>{shippingPrice ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(shippingPrice) : 'R$ 0,00'}</span>
            </div>

            <div>
              <p>Total dos produtos</p>
              <span>{cartTotal ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartTotal) : 'R$ 0,00'}</span>
            </div>
          </div>

          <div className="total">
            <h3>Total</h3>
            <div>
              <span><strong>{cartTotal ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartTotal + shippingPrice) : 'R$ 0,00'}</strong> em até 12x</span>
              <span>ou 1x <strong>{cartTotal ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartTotal + shippingPrice) : 'R$ 0,00'}</strong></span>
            </div>
          </div>
        </div>
      </Summary>

      <Title>
        <h2>Selecione a forma de pagamento</h2>
      </Title>

      <Container>
        <div className="payment-options">
          <div
            className="item"
            onClick={() => setPaymentSelectedOption(1)}
          >
            <FaCreditCard />
            <span>Cartão de Crédito</span>
          </div>
          <div
            className="item"
            onClick={() => setPaymentSelectedOption(2)}
          >
            <AiOutlineBarcode />
            <span>Boleto</span>
          </div>
        </div>

        <div className="payment-selected-option">

          {paymentSelectedOption === 1 && (

            <div className="credit-card-option">
              <form onSubmit={handleSubmit(handleCheckout)}>
                <Input
                  id="card_number"
                  name="card_number"
                  label="Número do cartão"
                  required
                  register={register}
                  error={errors.card_number?.message}
                />
                <Input
                  id="card_fullname"
                  name="card_fullname"
                  label="Nome impresso no cartão"
                  required
                  register={register}
                  error={errors.card_fullname?.message}
                />
                <Input
                  id="card_validity"
                  name="card_validity"
                  label="Validade"
                  type="date"
                  required
                  register={register}
                  error={errors.validity?.message}
                />
                <Input
                  id="card_security_code"
                  name="card_security_code"
                  label="CCV"
                  required
                  type="number"
                  register={register}
                  error={errors.card_security_code?.message}
                />

                {/* <Dropdown
                  id="card_portion"
                  name="card_portion"
                  required
                  register={register}
                  options={["1", "2"]}
                  title="Parcelas"
                /> */}

                <Button
                  type="submit"
                  title="Finalizar Pedido"
                />
              </form>
            </div>
          )}

          {paymentSelectedOption === 2 && (
            <div className="ticket-option">
              <div className="context">
                <div>
                  <FaCheckCircle size={16} />
                  <p>Pagamentos realizados por meio de boletos são compensados em até 3 dias uteis.</p>
                </div>
                <div>
                  <FaCheckCircle size={16} />
                  <p>O prazo de validade do boleto é de 1 dia util.</p>
                </div>
              </div>
              <div className="total">
                <span>Total:</span>
                <span>{cartTotal ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(cartTotal + shippingPrice) : "R$ 0,00"}</span>
              </div>
              <Button
                onClick={handleCheckout}
                title="Finalizar Pedido"
              />
            </div>
          )}
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default PaymentStep;