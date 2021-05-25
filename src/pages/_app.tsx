import { AuthProvider } from '../hooks/AuthContext';
import { CartProvider } from '../hooks/CartContext';

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </CartProvider>
  )
}

export default MyApp
