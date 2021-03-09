import { FaSearch } from 'react-icons/fa';

import styles from '../styles/components/SearchBar.module.css'

export default function SearchBar() {
  return (
    <div className={styles.containerSearchBar}>
      <FaSearch size={20} />
      <input type="text" placeholder="Busca por produtos" />
    </div>
  )
}