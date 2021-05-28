import Header from "../../components/modules/Header";
import { RiProfileFill } from 'react-icons/ri'
import { MdLocalShipping } from 'react-icons/md'
import { FaBoxOpen } from 'react-icons/fa'

import Link from 'next/link'

import { Container } from '../../styles/pages/CustomersProfile'

const Profile = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>MINHA CONTA</h1>

        <div className="menu">

          <div className="menu-item">
            <Link href="/customers/orders">
              <a>
                <div className="icon">
                  <FaBoxOpen size={50} />
                </div>
                <div className="context">
                  <h2>Meus pedidos</h2>
                </div>
              </a>
            </Link>
          </div>

          <div className="menu-item">
            <Link href="/customers/update-profile">
              <a>
                <div className="icon">
                  <RiProfileFill size={50} />
                </div>
                <div className="context">
                  <h2>Informações Pessoais</h2>
                </div>
              </a>
            </Link>
          </div>

          <div className="menu-item">
            <Link href="/customers/profile-address">
              <a>
                <div className="icon">
                  <MdLocalShipping size={50} />
                </div>
                <div className="context">
                  <h2>Endereços</h2>
                </div>
              </a>
            </Link>
          </div>

        </div>
      </Container>
    </>
  );
}

export default Profile;