import { useEffect, useState } from 'react';
import Header from '../../components/modules/Header';
import Footer from '../../components/modules/Footer';

import { Title, Container } from '../../styles/pages/CustomersCompletedOrder';
import { useCart } from '../../hooks/CartContext';

const CompletedOrder = () => {
  const { completedOrder } = useCart();
  console.log(completedOrder);
  return (
    <>
      <Header />

      <Title>
        <h2>Pedido Finalizado</h2>
      </Title>

      <Container>
        <div className="card">
          <div className="context">
            <h2>Obrigado.</h2>
            <p>Seu pedido foi efetivado. No momento estamos aguardando o pagamento.</p>
          </div>
          <div className="order-number">
            <h2>Identificação do pedido:</h2>
            <span>{completedOrder.orderCreated.order_number}</span>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default CompletedOrder;