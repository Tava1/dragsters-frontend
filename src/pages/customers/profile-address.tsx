import { useEffect, useState } from 'react';
import Header from "../../components/modules/Header";
import Footer from "../../components/modules/Footer";
import Link from 'next/link'
import { FaPlus, FaEdit, FaTrash, FaCheckCircle } from 'react-icons/fa'

import { Container } from '../../styles/pages/CustomersProfileAddress';

import api from '../../services/api';
import { useAuth } from '../../hooks/AuthContext';

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

const ProfileAddress = () => {
  const { customer } = useAuth();
  const [deliveryAdresses, setDeliveryAdresses] = useState<DeliveryAddressResponse[]>([])

  useEffect(() => {
    api.get(`/customer/delivery-address/${customer.id}`).then(response => {
      setDeliveryAdresses(response.data);
    })
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h1>MINHA CONTA</h1>

        <div className="menu">

          <div className="menu-item-new">
            <Link href="/customers/profile">
              <a>
                <div className="context">
                  <FaPlus />
                  <span>Incluir novo endereço</span>
                </div>
              </a>
            </Link>
          </div>

          {deliveryAdresses.map((deliveryAddress) => (
            <div className="menu-item">
              <Link href="/customers/profile">
                <a>
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
                </a>
              </Link>

              <div className="actions">
                <div>
                  <FaEdit size={20} />
                Alterar
              </div>
                <div>
                  <FaTrash size={16} />
                Remover
              </div>
              </div>
            </div>
          ))}

        </div>
      </Container>
      <Footer />
    </>
  );
}

export default ProfileAddress;