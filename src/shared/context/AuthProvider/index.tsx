/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useEffect, useState } from 'react';
import { api } from '../../server/api';
import { IAuthProvider, IContext, IUser } from './types';
import { getUserLocalStorage, Register, setUserLocalStorage } from './util';

export const AuthContext = createContext<IContext>({} as IContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(email: string, password: string) {
    const request = await api.post('auth', { email, password });

    console.log('request', request);

    const payload = {
      user: request.data?.user,
      access_token: request.data?.access_token,
    };

    if (payload) {
      setUser(payload.user);
      setUserLocalStorage(payload);
    }
  }

  async function register(
    username: string,
    email: string,
    password: string,
    confirmpass: string,
  ) {
    const response = await Register(username, email, password, confirmpass);

    const payload = {
      email: response.email,
      username,
      password,
      confirmpass,
    };

    setUser(payload);
    setUserLocalStorage(payload);
  }

  async function logout() {
    localStorage.removeItem('user');
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
