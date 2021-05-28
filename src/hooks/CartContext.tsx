import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

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
  amount: number;
}

interface OrderResponse {
  orderCreated: {
    id: string;
    customers_id: string;
    delivery_address_id: string;
    order_number: string;
    order_status_id: number;
    shipping: number;
    total: number;
    created_at: Date;
    updated_at: Date;
  };
  orderDetailCreated: Array<any>;
}

interface CartContextData {
  cart: CartItem[];
  cartTotal: number;
  addItemToCart(product: Product): void;
  removeItem(index: Number): void;
  handleDeliveryAddress(id: String): void;
  deliveryAddressId: string;
  handleShippingPrice(price: Number): void;
  shippingPrice: number;
  setCompletedOrder(orderResponse: OrderResponse): void;
  completedOrder: OrderResponse;
}

const CartContext = createContext({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [deliveryAddressId, setDeliveryAddressId] = useState('');
  const [shippingPrice, setShippingPrice] = useState(0);
  const [completedOrder, setCompletedOrder] = useState<OrderResponse>({} as OrderResponse);

  function addItemToCart(productItem) {
    const result = cartItems.filter((item) => item.product.product_id === productItem.product.product_id)

    if (result.length <= 0) {
      productItem.amount = 1;
      setCartItems([...cartItems, productItem])
    }
    else {
      let items = [...cartItems];

      items.filter((item) => item.product.product_id === productItem.product.product_id)
        .map(item => { item.amount += 1 })

      setCartItems(items);

    }
  }

  function removeItem(index) {
    let items = cartItems;
    items.splice(index, 1);

    setCartItems([...items]);
  }

  useEffect(() => {

    if (cartItems.length > 1) {
      setCartTotal(cartItems.reduce((acc, item) => {
        if (acc.product.price) {
          return Number(acc.product.price) + Number(item.product.price) * item.amount;
        }

        return Number(acc) + Number(acc.product.price) * item.amout;
      }))
    }
    else if (cartItems.length === 1) {
      setCartTotal(cartItems[0]?.product.price * cartItems[0]?.amount);
    }
    else if (cartItems.length === 0) {
      setCartTotal(0)
    }

  }, [cartItems]);

  function handleDeliveryAddress(id) {
    setDeliveryAddressId(id);
    console.log(deliveryAddressId)
  }

  function handleShippingPrice(price) {
    setShippingPrice(price)
  }

  return (
    <CartContext.Provider value={{ addItemToCart, removeItem, cart: cartItems, cartTotal, handleDeliveryAddress, deliveryAddressId, handleShippingPrice, shippingPrice, completedOrder, setCompletedOrder }}>
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