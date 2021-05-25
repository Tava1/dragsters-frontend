import React, { createContext, useCallback, useContext, useState } from 'react'

interface Product {
  brand: string;
  description: string;
  price: number;
  product_fullname: string;
  product_id: string;
  product_name: string;
  stars: number;
  status: boolean;
  supply: number
  created_at: Date;
  updated_at: Date;
}

interface Showcase {
  id: string;
  product_id: string;
  filename: string;
  path: string;
  thumbnail: boolean;
  created_at: Date;
  updated_at: Date;
}

interface CartItem {
  product: Product;
  showcase: Showcase[];
}

interface CartContextData {
  cart: CartItem[];
  addItemToCart(product: Product): void;
  removeItem(index: Number): void;
}

const CartContext = createContext({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function addItemToCart(productItem) {
    setCartItems([...cartItems, productItem])
  }

  function removeItem(index) {
    let itens = cartItems;
    itens.splice(index, 1);

    console.log(itens)
    setCartItems([...itens]);
  }

  return (
    <CartContext.Provider value={{ addItemToCart, removeItem, cart: cartItems }}>
      {children}
    </CartContext.Provider>
  );
};

function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within an AuthProvider');
  }

  return context;
}

export { CartProvider, useCart }