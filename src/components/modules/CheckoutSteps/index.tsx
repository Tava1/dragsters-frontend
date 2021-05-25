import { Container } from "./styles";
import { FaChevronRight } from 'react-icons/fa';

const CheckoutSteps = () => (
  <Container>
    <div className="conatiner-checkout-steps">
      <div className="current">
        <span><strong>Resumo do pedido</strong></span>
      </div>

      <div className="current">
        <FaChevronRight />
      </div>

      <div className="next">
        <span>Entrega</span>
      </div>

      <div className="next">
        <FaChevronRight />
      </div>

      <div className="next">
        <span>Pagamento</span>
      </div>
    </div>
  </Container>
);

export default CheckoutSteps;