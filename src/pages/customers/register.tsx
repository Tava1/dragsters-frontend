import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { isValid } from 'cpf';
import * as yup from 'yup';

import Header from '../../components/modules/Header';
import Footer from '../../components/modules/Footer';

import Input from '../../components/elements/Input';
import TextArea from '../../components/elements/TextArea';
import Button from '../../components/elements/Button';
import InputRadio from '../../components/elements/InputRadio';

import styles from '../../styles/pages/CustomersRegister.module.scss';
import api from '../../services/api';

interface viaCEPResponse {
  cep: string;
  logradouro: string;
  bairro: string;
  complemento: string;
  localidade: string;
  uf: string;
}

const schema = yup.object().shape({
  fullname: yup.string().required('Campo obrigatório.'),
  date_of_birth: yup.date().required('Campo obrigatório.').typeError('A data de nascimento deve ser válida.'),
  cpf: yup.string().min(11, 'CPF deve ser válido.').max(11, 'CPF deve ser válido.').required('Campo obrigatório.'),
  phone: yup.string().required('Campo obrigatório.'),
  email: yup.string().email().required('Campo obrigatório.'),
  password: yup.string().required('Campo obrigatório.'),
  zip_code: yup.string().min(8, 'CEP deve ser válido.').max(8, 'CEP deve ser válido.').required('Campo obrigatório.'),
  address: yup.string().required(),
  number: yup.string().required('Campo obrigatório.'),
  complement: yup.string(),
  neighborhood: yup.string().required('Campo obrigatório.'),
  city: yup.string().required('Campo obrigatório.'),
  state: yup.string().required('Campo obrigatório.'),
  reference_point: yup.string().required('Campo obrigatório.'),
});

const genders = ['Masculino', 'Feminino', 'Outros']

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const [addressAPI, setAddressAPI] = useState({} as viaCEPResponse);
  const [cep, setCep] = useState<string>('');

  const handleNewAccount = async (data) => {
    const {
      fullname,
      date_of_birth,
      gender,
      cpf,
      phone,
      email,
      password,
      zip_code,
      address,
      number,
      complement,
      neighborhood,
      city,
      state,
      reference_point
    } = data;

    const customer = {
      fullname,
      date_of_birth,
      gender,
      cpf,
      phone,
      email,
      password,
    }

    const addressInfo = {
      zip_code,
      address,
      number,
      complement,
      neighborhood,
      city,
      state,
      reference_point
    }

    console.log(data);
    console.log(isValid(cpf))

    await api.post('customers', { customer, addressInfo }).then(response => {
      console.log(response);
    }).catch(error => {
      console.error(error);
    })
  };

  const handleCEP = async (e) => {
    setCep(e.target.value);
  }

  useEffect(() => {
    if (cep.length === 8)
      //api.get(`${process.env.VIACEP_API}${cep}${process.env.VIACEP_RESPONSE_TYPE}`).then(response => {
      api.get(`https://viacep.com.br/ws/${cep}/json`).then(response => {
        if (response.status === 200) {
          setAddressAPI(response.data);
        }
      }).catch((error) => {
        return;
      })
  }, [cep]);

  return (
    <>
      <Header />
      <main className={styles.container}>
        <form onSubmit={handleSubmit(handleNewAccount)}>
          <h2>REGISTRE-SE</h2>

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
              label="CPF *"
              type="number"
              required
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

          <h2>CADASTRE SEU MELHOR ENDEREÇO</h2>

          <div className="input-group">
            <Input
              name="zip_code"
              label="DIGITE SEU CEP *"
              type="text"
              required
              register={register}
              onChange={handleCEP}
              error={errors.zip_code?.message}
            />

            <Input
              name="address"
              label="ENDEREÇO *"
              type="text"
              required
              register={register}
              defaultValue={addressAPI.logradouro}
              value={addressAPI.logradouro}
              error={errors.address?.message}
            />

            <Input
              name="number"
              label="NÚMERO *"
              type="text"
              required
              register={register}
              error={errors.number?.message}
            />

            <Input
              name="complement"
              label="COMPLEMENTO"
              type="text"
              required
              register={register}
              error={errors.complement?.message}
            />

            <Input
              name="neighborhood"
              label="BAIRRO *"
              type="text"
              required
              register={register}
              defaultValue={addressAPI.bairro}
              error={errors.neighborhood?.message}
            />

            <div>
              <Input
                name="state"
                label="ESTADO *"
                type="text"
                required
                register={register}
                defaultValue={addressAPI.uf}
                error={errors.neighborhood?.message}
              />

              <Input
                name="city"
                label="CIDADE *"
                type="text"
                required
                register={register}
                defaultValue={addressAPI.localidade}
                error={errors.neighborhood?.message}
              />
            </div>

            <TextArea
              name="reference_point"
              label="PONTO DE REFERÊNCIA *"
              type="text"
              required
              register={register}
              error={errors.reference_point?.message}
            />
          </div>

          <Button
            title="REGISTRAR"
            type="submit"
          />
        </ form>
      </main>
      <Footer />
    </>
  )
}