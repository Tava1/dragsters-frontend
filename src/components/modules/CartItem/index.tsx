import { Container } from "./styles";
import { FaTrash } from 'react-icons/fa';

import { useCart } from '../../../hooks/CartContext';

const CartItem = ({ image, product_id, index, fullname, brand, price, amount }) => {
  const { removeItem } = useCart();

  return (
    <Container>
      <div className="thumbnail">
        <img src={image} alt={fullname} />
      </div>

      <div className="context">
        <div className="informations">
          <div>
            <h2>{fullname}</h2>
            <p>{brand}</p>
          </div>
          <div
            onClick={() => removeItem(index)}
            className="remove-item">
            <FaTrash />
          </div>
        </div>

        <div className="amount">
          <input value={amount} type="number" />
          <span><strong>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}</strong></span>
        </div>
      </div>
    </Container>
  );
}

export default CartItem;