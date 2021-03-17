import { FaSearch } from 'react-icons/fa';

import styles from './styles.module.scss';

export default function Navigation() {
  return (
    <header className={styles.navigationContainer}>
      <div className={styles.navigationBar}>
        <div className={styles.logo}>
          <h1>
            <a href="">DRAGSTERS</a>
          </h1>
        </div>

        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Rodas</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
          </ul>

          <div className={styles.signInSignOut}>
            <a href="#">Entrar</a>
            <a href="#">Registrar</a>
          </div>
        </nav>
      </div>
    </header>
  );
}