import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Container } from './styles';

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  register: UseFormRegister<any>;
  required: boolean;
  error: string;
  options: string[]
}

const InputRadio = ({ name, register, required, error, label, options, ...rest }: InputRadioProps) => (
  <Container>
    <label>{label}</label>

    <div className="options">
      {options && options.map(option => (
        <div key={options.indexOf(option)}>
          <input
            type="radio"
            name={name}
            id={option}
            value={option}
            {...register(name, { required })}
            {...rest}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
    {
      error && (
        <div className="error">
          <span>{error}</span>
        </div>
      )
    }
  </Container >
);

export default InputRadio;