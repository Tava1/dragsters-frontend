import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Header from '../../components/modules/Header';
import Footer from '../../components/modules/Footer';
import Input from '../../components/elements/Input';
import TextArea from '../../components/elements/TextArea';
import Button from '../../components/elements/Button';

// const schema = yup.object().shape({
//   fullname: yup.string().required('Campo obrigatório'),
//   date_of_birth: yup.date().required('Campo obrigatório'),
//   gender: yup.string().required('Campo obrigatório'),
//   cpf: yup.string().min(11, 'CPF deve ser válido.').max(11, 'CPF deve ser válido.').required('Campo obrigatório.'),
//   phone: yup.string().required('Campo obrigatório'),
//   email: yup.string().email().required('Campo obrigatório'),
//   password: yup.string().required('Campo obrigatório'),
//   zip_code: yup.string().min(8, 'CEP deve ser válido.').max(8, 'CEP deve ser válido.').required('Campo obrigatório.'),
//   address: yup.string().required('Campo obrigatório'),
//   number: yup.string().required('Campo obrigatório'),
//   complement: yup.string(),
//   neighborhood: yup.string().required('Campo obrigatório'),
//   city: yup.string().required('Campo obrigatório.'),
//   state: yup.string().required('Campo obrigatório.'),
//   reference_point: yup.string().required('Campo obrigatório'),
// });

export default function Register() {
  const { register, handleSubmit } = useForm();

  const handleNewRegister = async (data) => {
    console.log(data)
  };

  return (
    <>
      <Header />
      <main>
        <form onSubmit={handleSubmit(handleNewRegister)}>
          <h2>REGISTRE-SE</h2>

          <Input
            name="fullname"
            title="NOME COMPLETO *"
            type="text"
            required
            register={register}
          // error={errors.fullname?.message}
          />

          <Input
            name="date_of_birth"
            title="DATA DE NASCIMENTO *"
            type="date"
            register={register}
            required
          // error={errors.date_of_birth?.message}
          />

          <div>
            <label>SEXO *</label>

            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="Masculino"
                ref={register}
                required
              />
              <label htmlFor="male">Masculino</label>
            </div>

            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Feminino"
                ref={register}
                required
              />
              <label htmlFor="female">Feminino</label>
            </div>

            <div>
              <input
                type="radio"
                id="other"
                name="gender"
                value="Outros"
                ref={register}
                required
              />
              <label htmlFor="other">Outros</label>
            </div>

            {/* <span>{errors.gender?.message}</span> */}
          </div>

          <Input
            name="cpf"
            title="CPF *"
            type="number"
            register={register}
            required
          // error={errors.cpf?.message}

          />
          <Input
            name="phone"
            title="SEU MELHOR TELEFONE COM (DDD) *"
            type="number"
            register={register}
            required
          // error={errors.phone?.message}

          />

          <h2>INFORMAÇÕES DE LOGIN</h2>
          <p>Guarde bem estas informações pois irá utilizar para futuras compras em nossa loja.</p>

          <Input
            name="email"
            title="SEU MELHOR E-MAIL *"
            type="mail"
            register={register}
            required
          // error={errors.email?.message}

          />
          <Input
            name="password"
            title="UMA SENHA SEGURA *"
            type="password"
            register={register}
            required
          // error={errors.password?.message}

          />
          <Input
            name="password_confirmed"
            title="CONFIRME A SUA SENHA *"
            type="password"
            register={register}
            required
          // error={errors.password?.message}
          />

          <h2>CADASTRE SEU MELHOR ENDEREÇO</h2>

          <Input
            name="zip_code"
            title="DIGITE SEU CEP *"
            type="number"
            register={register}
            required
          // error={errors.zip_code?.message}

          />

          <Input
            name="address"
            title="ENDEREÇO *"
            type="text"
            register={register}
            required
          // error={errors.address?.message}

          />

          <Input
            name="number"
            title="NÚMERO *"
            type="text"
            register={register}
            required
          // error={errors.number?.message}

          />

          <Input
            name="complement"
            title="COMPLEMENTO"
            type="text"
            register={register}
            required
          // error={errors.complement?.message}

          />

          <Input
            name="neighborhood"
            title="BAIRRO *"
            type="text"
            register={register}
            required
          // error={errors.neighborhood?.message}

          />

          <div>

            <div>
              <label htmlFor="">ESTADO *</label>
              <select name="" id="">
                <option value="">Selecione</option>
                <option value="SP">SP</option>
              </select>
              {/* <span>{errors.state?.message}</span> */}
            </div>

            <Input
              name="city"
              title="CIDADE *"
              type="text"
              register={register}
              required
            // error={errors.city?.message}
            />
          </div>

          <TextArea
            name="reference_point"
            title="PONTO DE REFERÊNCIA *"
            type="text"
            register={register}
            required
          // error={errors.reference_point?.message}

          />

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