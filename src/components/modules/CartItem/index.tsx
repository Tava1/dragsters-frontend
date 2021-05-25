import { Container } from "./styles";
import { FaTrash } from 'react-icons/fa';

import { useCart } from '../../../hooks/CartContext';

const CartItem = ({ image, product_id, index, fullname, brand, price }) => {
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
          <input value="4" type="number" />
          <span><strong>R$ {price}</strong></span>
        </div>
      </div>
    </Container>
  );
}

export default CartItem;