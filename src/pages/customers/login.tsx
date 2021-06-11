import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router'

import Header from '../../components/modules/Header';
import Footer from '../../components/modules/Footer';
import Input from '../../components/elements/Input';
import Button from '../../components/elements/Button';
import Link from 'next/link';

import { Container } from '../../styles/pages/CustomersLogin'

import { useAuth } from '../../hooks/AuthContext';

const schema = yup.object().shape({
  email: yup.string().email().required('Campo obrigatório.'),
  password: yup.string().required('Campo obrigatório.'),
});

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const router = useRouter();
  const { signIn } = useAuth();

  return (
    <>
      <Header />
      <Container>
        <h2>FAÇA SEU LOGIN</h2>

        <form onSubmit={handleSubmit(signIn)}>
          <Input
            id="email"
            name="email"
            label="E-MAIL"
            required
            register={register}
            error={errors.email?.message}
          />
          <Input
            id="password"
            name="password"
            label="SENHA"
            type="password"
            required
            register={register}
            error={errors.password?.message}
          />
          <Button
            title="ENTRAR"
            type="submit"
          />
        </form>

        <div className="forgotten-password">
          <Link href="/">
            <a>Esqueci a senha</a>
          </Link>
        </div>

        <div className="or">
          <div className="line"></div>
          <div>
            <span>OU</span>
          </div>
          <div className="line"></div>
        </div>

        <Button
          title="REGISTRE-SE"
          onClick={() => router.push('/customers/register')}
        />
      </Container>
      <Footer />
    </>
  )
}