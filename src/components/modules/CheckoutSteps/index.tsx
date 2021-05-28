import { Container } from "./styles";
import { FaChevronRight } from 'react-icons/fa';

const CheckoutSteps = ({ step }) => (
  <Container>
    <div className="conatiner-checkout-steps">
      <div className={step === 1 ? "current" : "next"}>
        <span>Resumo do pedido</span>
      </div>

      <div className={step === 1 ? "current" : "next"}>
        <FaChevronRight />
      </div>

      <div className={step === 2 ? "current" : "next"}>
        <span>Entrega</span>
      </div>

      <div className={step === 2 ? "current" : "next"}>
        <FaChevronRight />
      </div>

      <div className={step === 3 ? "current" : "next"}>
        <span>Pagamento</span>
      </div>
    </div>
  </Container>
);

export default CheckoutSteps;