import { useState } from 'react';
import { useAuth } from '../../../hooks/AuthContext';
import { FaUser } from 'react-icons/fa';
import Link from 'next/link';

import { Container } from './styles';

interface CurrentCustomer {
  id: string;
  fullname: string;
  email: string;
}

const Header = () => {
  const { customer, signOut } = useAuth();
  const [currentCustomer, setCurrentCustomer] = useState<CurrentCustomer>(customer as CurrentCustomer);

  return (
    <Container>
      <div className="navigation-bar">
        <div className="logo">
          <h1>
            <Link href="/">
              <a>
                DRAGSTERS
              </a>
            </Link>
          </h1>
        </div>

        <nav>
          <ul>
            <li>
              <Link href="/products/ShowProducts">
                <a>Inicio</a>
              </Link>
            </li>
            <li><a href="#">Rodas</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
          </ul>

          {
            !currentCustomer ? (
              <div className="sign-in-sign-out">
                <Link href="/customers/login">
                  <a>Entrar</a>
                </Link>
                <Link href="/customers/register">
                  <a>Registrar</a>
                </Link>
              </div>
            ) : (
              <div className="dropdown">
                <FaUser />
                <div className="dropdown-list">
                  <div>
                    <Link href="/customer/perfil">
                      <a>Meu perfil</a>
                    </Link>
                    <Link href="/customer/perfil">
                      <a>Meu pedidos</a>
                    </Link>
                    <button
                      onClick={signOut}
                    >Sair</button>
                  </div>
                </div>
              </div>
            )
          }
        </nav>
      </div>
    </Container>
  );
}

export default Header;