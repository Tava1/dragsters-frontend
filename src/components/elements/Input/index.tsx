import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  register: UseFormRegister<any>;
  required: boolean;
  error: string;
}

const Input = ({ register, required, label, name, error, ...rest }: InputProps) => (
  <Container>
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      {...register(name, { required })}
      {...rest}
    />
    {error && (
      <div className="error">
        <span>{error}</span>
      </div>
    )}
  </Container>
);

export default Input;