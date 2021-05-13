import { Container } from './styles';

const TextArea = ({ register, required, error, name, label, ...rest }) => (
  <Container>
    <label htmlFor={name}>{label}</label>
    <textarea
      {...rest}
      id={name}
      name={name}
      {...register(name, { required })}
    >
    </textarea>
    {error && (
      <div className="error">
        <span>{error}</span>
      </div>
    )}
  </Container>
)

export default TextArea;