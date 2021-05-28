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
  order_status: {
    description: string;
  }
  total: string
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
              <span>#{ord.order_number}</span>
              <span>{ord.created_at}</span>
              <span>R$ {ord.total}</span>
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
          ))}
        </div>
      </Container>
    </>
  );
}

export default Orders;