/* eslint-disable no-undef */

export interface IToken {
  access_token?: string;
}

export interface IUser {
  email?: string;
  access_token?: string;
  username?: string;
  password?: string;
  confirmpassword?: string;
}

export interface IContext extends IUser {
  register: (
    username: string,
    email: string,
    password: string,
    confirmpass: string,
  ) => Promise<void>;
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
