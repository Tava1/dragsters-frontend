import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/AuthContext';
import Link from 'next/link';

import Header from '../../components/modules/Header';
import Input from '../../components/elements/Input';
import Button from '../../components/elements/Button';
import PageSectionTitle from '../../components/modules/PageSectionTitle';

import api from '../../services/api';

import styles from '../../styles/pages/CreateProduct.module.scss'

export default function Create() {
  const { token } = useAuth();
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const handleNewUser = async (data) => {
    await api.post('/users', data, { headers: { Authorization: `Bearer ${token}` } }).then((response) => {
      router.push('/users/List');

    }).catch((error) => {
      console.error(error);
    })
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.containerCreate}>
          <PageSectionTitle
            title="Novo Usuário"
            count=""
            description="Reúna as informações necessárias e cadastre um novo usuário."
            buttonTitle="Lista de usuários"
            buttonPath="/users/List"
          />

          <main>
            <form onSubmit={handleSubmit(handleNewUser)}>
              <Input
                name="fullname"
                type="text"
                title="Nome Completo"
                id="fullname"
                register={register}
              />

              <div className={styles.inputGroup}>
                <Input
                  name="email"
                  type="mail"
                  title="E-mail"
                  id="email"
                  register={register}
                />

                <Input
                  name="password"
                  type="password"
                  title="Senha"
                  id="password"
                  register={register}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="role">Perfil</label>
                <select
                  id="role"
                  name="role"
                  ref={register}
                >
                  <option value="none">Selecionar</option>
                  <option value="stockist">Estoquista</option>
                  <option value="admin">Administrador</option>
                </select>
              </div>

              <div className={styles.actions}>
                <Link href="/users/List">Cancelar</Link>
                <Button
                  title="Próximo"
                  type="submit"
                />
              </div>
            </form>
          </main>
        </div>
      </div>
    </>
  )
}