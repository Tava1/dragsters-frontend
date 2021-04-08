import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Header from '../../components/modules/Header';
import PageSectionTitle from '../../components/modules/PageSectionTitle';
import Input from '../../components/elements/Input';
import Button from '../../components/elements/Button';

import styles from '../../styles/pages/UpdateProduct.module.scss';
import api from '../../services/api';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../hooks/AuthContext';

interface User {
  id: string;
  fullname: string;
  email: string,
  status: boolean;
  role: 'admin' | 'stockist';
  created_at: Date;
  updated_at: Date;
}

export default function Update() {
  const { token } = useAuth();
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<User | null>();
  const [isActive, setIsActive] = useState<Boolean>();

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    api.get(`/users/${id}`, { headers: { Authorization: `Bearer ${token}` } }).then((response) => {
      console.log(response.data)
      setUser(response.data);
      setIsActive(response.data.status);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  const handleUpdateUser = async (data) => {
    data.status = isActive;

    try {

      console.log(data)
      await api.put(`users/${id}`, data, { headers: { Authorization: `Bearer ${token}` } }).then((response) => {
        console.log(response);
      });
      // router.push('/users/List');
    } catch (error) {
      console.log(error)
    }
  };

  const setStatus = (e) => {
    e.preventDefault();

    if (isActive === true) {
      setIsActive(false);
    }
    else {
      setIsActive(true);
    }
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.containerUpdate}>

          <PageSectionTitle
            title="Atualiazar Usuário"
            count=""
            description="Atualize as informações do usuário."
            buttonTitle="Lista de usuários"
            buttonPath="/users/List"
          />

          {user && (
            <main>
              <form onSubmit={handleSubmit(handleUpdateUser)}>

                <Input
                  name="fullname"
                  type="text"
                  title="Nome Completo"
                  id="fullname"
                  register={register}
                  defaultValue={user.fullname}
                />

                <div>
                  <span><strong>E-mail</strong></span>
                  <span>{user.email}</span>
                </div>

                <div>
                  <label htmlFor="role">Perfil</label>
                  <select
                    id="role"
                    name="role"
                    ref={register}
                    defaultValue={user.role}
                  >
                    <option value="none">Selecionar</option>
                    <option value="stockist">Estoquista</option>
                    <option value="admin">Administrador</option>
                  </select>
                </div>

                <div className={styles.status}>
                  <label>Ativo/Inativo</label>
                  {
                    isActive === true
                      ?
                      <button
                        className={styles.active}
                        onClick={setStatus}
                      >
                        INATIVAR
                        </button>
                      :
                      <button
                        className={styles.inactive}
                        onClick={setStatus}
                      >
                        REATIVAR
                        </button>
                  }
                </div>

                <div>
                  <Link href="/users/PasswordReset">
                    <a href="">Redefinir Senha</a>
                  </Link>
                </div>

                <div className={styles.actions}>
                  <Link href="/">Cancelar</Link>
                  <Button
                    title="Salvar"
                    type="submit"
                  />
                </div>
              </form>
            </main>
          )}

        </div>
      </div>
    </>
  )
}