import { useEffect, useState } from "react";
import { useAuth } from '../../hooks/AuthContext';
import { useRouter } from 'next/router';

import Header from "../../components/modules/Header";

import api from "../../services/api";

import { Title, Container } from '../../styles/pages/CustomersOrderDetail'

interface MyOrderDetail {
  id: string,
  amount: number;
  product_id: string,
}

interface MyOrder {
  id: string;
  order_number: string;
  shipping: number;
  total: number;
  customers_id: string;
  delivery_address_id: string
  created_at: Date;
  updated_at: Date;
  order_detail: MyOrderDetail[];
  order_status: {
    description: string;
  }
}

const OrderDetail = () => {
  const router = useRouter();
  const { id } = router.query

  const { customer } = useAuth()
  const [myOrder, setMyOrder] = useState<MyOrder>({} as MyOrder);

  useEffect(() => {
    api.get(`/order/detail/${id}`).then(response => {
      setMyOrder(response.data)
    }).catch(error => {
      console.error(error);
    })
  }, []);

  useEffect(() => {
    api.get(`customer/delivery-address/detail/${myOrder.delivery_address_id}`).then(response => {
      console.log(response.data)
    }).catch(error => {
      console.error(error);
    })

    //TODO: Buscar produtos
  }, [myOrder]);

  return (
    <>
      <Header />

      <Title>
        <h2>PEDIDO: {myOrder && myOrder.order_number}</h2>
      </Title>

      <Container>

        <div className="order-summary">
          <div className="subtotal">
            <h3>Subtotal</h3>
            <div>
              <p>Frete</p>
              <span>R$ {myOrder.shipping ? myOrder.shipping : '0,00'}</span>
            </div>

            <div>
              <p>Total dos produtos</p>
              <span>R$ {myOrder.total ? myOrder.total : '0,00'}</span>
            </div>
          </div>

          <div className="total">
            <h3>Total</h3>
            <div>
              <span><strong>R$ {myOrder.total ? Number(myOrder.total) + Number(myOrder.shipping) : '0,00'}</strong> em até 12x</span>
              <span>ou 1x <strong>R$ {myOrder.total ? Number(myOrder.total) + Number(myOrder.shipping) : '0,00'}</strong></span>
            </div>
          </div>
        </div>

        <div className="order-items">
          <div className="item">
            <div>
              <img src="" alt="" />
            </div>
            <div className="context">
              <h3>RODA XFH</h3>
              <p>Quantidade: 4</p>
              <p>Total: R$4 0000</p>
            </div>
          </div>
        </div>

      </Container>
    </>
  );
}

export default OrderDetail;