import Link from 'next/link';
import { useAuth } from '../../../hooks/AuthContext';

import styles from './styles.module.scss';

import { useState } from 'react';

interface CurrentUser {
  id: string;
  fullname: string;
  email: string;
  status: boolean;
  role: string;
}

export default function Header() {
  const { user } = useAuth();
  const [currentUser, setCurrentUser] = useState<CurrentUser>(user as CurrentUser);

  return (
    <header className={styles.navigationContainer}>
      <div className={styles.navigationBar}>
        <div className={styles.logo}>
          <h1>
            <Link href="/menu">DRAGSTERS</Link>
          </h1>
        </div>

        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Rodas</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
          </ul>

          {
            !currentUser ? (
              <div className={styles.signInSignOut}>
                <a href="/login">Entrar</a>
                <a href="#">Registrar</a>
              </div>
            ) : (
              <div className={styles.signInSignOut}>
                <a
                  href="/login">{currentUser.fullname}
                </a>
              </div>
            )
          }
        </nav>
      </div>
    </header>
  );
}