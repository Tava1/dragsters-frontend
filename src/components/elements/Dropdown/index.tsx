import React, { SelectHTMLAttributes } from 'react';
import { UseFormRegister } from "react-hook-form";

import styles from './styles.module.scss';

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  title?: string;
  options: Array<string>
  name: string;
  register: UseFormRegister<any>;
  required: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ title, name, register, required, options, ...rest }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{title}</label>
      <select
        id={name}
        name={name}
        {...register(name, { required })}
        {...rest}
      >
        <option value="">Selecione</option>
        {options && options.map(option => (
          <option key={options.indexOf(option)} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;