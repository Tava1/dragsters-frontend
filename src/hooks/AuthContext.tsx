import React, { createContext, useCallback, useContext, useState } from 'react';
import { useRouter } from 'next/router'
import api from '../services/api';
import Cookies from 'js-cookie';

interface AuthState {
  token: string;
  customer: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  customer: object;
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = Cookies.get('@dragsters:customer_token');
    const customer = Cookies.get('@dragsters:customer');

    if (token && customer) {
      return { token, customer: JSON.parse(customer) };
    }

    return {} as AuthState;
  });

  const router = useRouter();

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('customers/sessions', {
      email,
      password,
    });

    const { token, customer } = response.data;

    Cookies.set('@dragsters:customer_token', token);
    Cookies.set('@dragsters:customer', JSON.stringify(customer))

    setData({ token, customer });

    console.log(token);

    router.push('/');

  }, []);

  const signOut = useCallback(() => {
    Cookies.remove('@dragsters:customer_token');
    Cookies.remove('@dragsters:customer');

    setData({} as AuthState);

    if (router.pathname === '/')
      router.reload();
    else
      router.push('/');

  }, []);

  return (
    <AuthContext.Provider value={{ customer: data.customer, token: data.token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error('useAuth must be used within an AuthProvider');

  return context;
}

export { AuthProvider, useAuth }
