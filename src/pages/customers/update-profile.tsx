import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Header from '../../components/modules/Header';
import Footer from '../../components/modules/Footer';

import Input from '../../components/elements/Input';
import Button from '../../components/elements/Button';
import InputRadio from '../../components/elements/InputRadio';

import styles from '../../styles/pages/CustomersRegister.module.scss';
import api from '../../services/api';


const schema = yup.object().shape({
  fullname: yup.string().required('Campo obrigatório.'),
  date_of_birth: yup.date().required('Campo obrigatório.').typeError('A data de nascimento deve ser válida.'),
  cpf: yup.string().min(11, 'CPF deve ser válido.').max(11, 'CPF deve ser válido.').required('Campo obrigatório.'),
  phone: yup.string().required('Campo obrigatório.'),
  email: yup.string().email().required('Campo obrigatório.'),
  password: yup.string().required('Campo obrigatório.'),
});

const genders = ['Masculino', 'Feminino', 'Outros']

const UpdateProfile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const handleUpdateAccount = async (data) => {
    console.log(data);

    await api.post('customers', data).then(response => {
      console.log(response);
    }).catch(error => {
      console.error(error);
    })
  };

  return (
    <>
      <Header />
      <main className={styles.container}>
        <form onSubmit={handleSubmit(handleUpdateAccount)}>
          <h2>ATUALIZAR PERFIL</h2>

          <div className="input-group">
            <Input
              name="fullname"
              label="NOME COMPLETO *"
              type="text"
              required
              register={register}
              error={errors.fullname?.message}
            />

            <Input
              name="date_of_birth"
              label="DATA DE NASCIMENTO *"
              type="date"
              required
              register={register}
              error={errors.date_of_birth?.message}
            />

            <InputRadio
              name="gender"
              label={"SEXO *"}
              options={genders}
              required
              register={register}
              error={errors.gender?.message}
            />

            <Input
              name="cpf"
              label="CPF"
              type="number"
              required
              disabled
              register={register}
              error={errors.cpf?.message}
            />

            <Input
              name="phone"
              label="SEU MELHOR TELEFONE COM (DDD) *"
              type="number"
              required
              register={register}
              error={errors.phone?.message}
            />
          </div>

          <h2>INFORMAÇÕES DE LOGIN</h2>
          <p>Guarde bem estas informações pois irá utilizar para futuras compras em nossa loja.</p>

          <div className="input-group">
            <Input
              name="email"
              label="SEU MELHOR E-MAIL *"
              type="mail"
              required
              disabled
              register={register}
              error={errors.email?.message}
            />
            <Input
              name="password"
              label="UMA SENHA SEGURA *"
              type="password"
              required
              register={register}
              error={errors.password?.message}

            />
            <Input
              name="password_confirmed"
              label="CONFIRME A SUA SENHA *"
              type="password"
              required
              register={register}
              error={errors.password?.message}
            />
          </div>

          <Button
            title="SALVAR"
            type="submit"
          />
        </ form>
      </main>
      <Footer />
    </>
  )
}

export default UpdateProfile;