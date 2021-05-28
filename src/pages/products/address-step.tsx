import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Header from '../../components/modules/Header';
import Footer from '../../components/modules/Footer';
import Button from '../../components/elements/Button';

import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'

import CheckoutSteps from '../../components/modules/CheckoutSteps';

import { useAuth } from '../../hooks/AuthContext';
import { useCart } from '../../hooks/CartContext';

import api from '../../services/api';

import { Title, Container } from '../../styles/pages/CustomersAddressStep';

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

const AddressStep = () => {
  const { customer } = useAuth();
  const { handleDeliveryAddress, deliveryAddressId } = useCart();
  const [deliveryAdresses, setDeliveryAdresses] = useState<DeliveryAddressResponse[]>([])
  const router = useRouter();

  useEffect(() => {
    api.get(`/customer/delivery-address/${customer.id}`).then(response => {
      setDeliveryAdresses(response.data);
    })
  }, []);

  return (
    <>
      <Header />

      <CheckoutSteps step={2} />

      <Title>
        <h2>Selecione o endereço de entrega</h2>
      </Title>

      <Container>
        <div className="menu">
          <div className="menu-item-new">
            <Link href="/customers/profile-address">
              <a>
                <div className="context">
                  <AiFillSetting />
                  <span>Gerenciar meus endereços</span>
                </div>
              </a>
            </Link>
          </div>

          {deliveryAdresses.map((deliveryAddress) => (
            <div
              key={deliveryAddress.id}
              className="menu-item"
              style={deliveryAddress.id === deliveryAddressId ? { border: '4px solid var(--red)' } : { border: '4px solid none' }}
              onClick={() => handleDeliveryAddress(deliveryAddress.id)}
            >
              <div className="address-choice">
                <div className="default-address">
                  {deliveryAddress.primary && (
                    <>
                      <span>Selecionado como padrão.</span>
                      <FaCheckCircle size={12} />
                    </>
                  )}
                </div>
                <div className="context">
                  <h2>{deliveryAddress.fullname}</h2>
                  <p>{`${deliveryAddress.address}, ${deliveryAddress.number}`}</p>
                  <p>{deliveryAddress.complement}</p>
                  <p>{deliveryAddress.neighborhood}</p>
                  <span>{`${deliveryAddress.city}, ${deliveryAddress.state} - ${deliveryAddress.zip_code.substring(0, 5)}-${deliveryAddress.zip_code.substring(5)}`}</span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </Container>


      {deliveryAddressId &&
        <Button
          title="PROSSEGUIR"
          onClick={router.push('/products/payment-step')}
        />
      }

      <Footer />
    </>
  );
}

export default AddressStep;