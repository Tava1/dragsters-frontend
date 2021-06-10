import { useEffect, useState } from "react";
import { useAuth } from '../../hooks/AuthContext';
import { FaBars } from 'react-icons/fa'
import { useRouter } from 'next/router';

import Header from "../../components/modules/Header";

import api from "../../services/api";

import { Container } from '../../styles/pages/CustomersOrders'

interface MyOrders {
  id: string;
  customers_id: string;
  order_number: string;
  shipping: number;
  order_status: {
    description: string;
  }
  total: number;
  updated_at: Date;
  created_at: Date;
}

interface OrdersResponse {
  orders: MyOrders[];
}

const Orders = () => {
  const router = useRouter();

  const { customer } = useAuth()
  const [myOrders, setMyOrders] = useState<OrdersResponse>({} as OrdersResponse);

  useEffect(() => {
    api.get(`/order/${customer.id}`).then(response => {
      setMyOrders(response.data)
    }).catch(error => {
      console.error(error);
    })
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h1>MEUS PEDIDOS</h1>

        <div className="orders">
          {myOrders && myOrders.orders?.map(ord => (
            <div key={ord.id} className="orders-item">
              <div className="order-number">
                <span>#{ord.order_number}</span>
              </div>
              <div className="order-context">
                <span>Pedido realizado: {new Date(ord.created_at).toLocaleString('PT-br')}</span>
                <span>Última atualização: {new Date(ord.updated_at).toLocaleString('PT-br')}</span>
                <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(ord.total) + Number(ord.shipping))}</span>
                <span>{ord.order_status.description}</span>
                <div
                  className="detail"
                  onClick={() => router.push({
                    pathname: '/customers/order-detail',
                    query: { id: ord.id }
                  })}
                >
                  <FaBars size={32} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Orders;