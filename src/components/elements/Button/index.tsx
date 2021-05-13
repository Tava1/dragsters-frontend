import { Container } from './styles';

const Button = ({ title, ...rest }) => (
  <Container>
    <button
      {...rest}
    >
      {title}
    </button>
  </Container>
)

export default Button;