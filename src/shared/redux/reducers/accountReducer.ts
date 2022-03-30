/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { api } from '../../server/api';

interface IUser {
  id: number;
  email: string;
  imagemUrl: string;
  nome: string;
}

interface IDespesa {
  descricao: string;
  valor: number;
  emissao: string;
  vencimento: string;
  idConta: number;
  tipo: number;
  pago: string;
}

type AccountState = {
  user: IUser;
  lancamento: IDespesa;
};

export const getUser = createAsyncThunk('User/getUser', async () => {
  const response = await api.get(`/users/usuarioauth`);
  return response.data as IUser;
});

export const postLancamento = createAsyncThunk(
  'Lancamento/postLancamento',
  async ({
    descricao,
    valor,
    emissao,
    vencimento,
    idConta,
    tipo,
    pago,
  }: {
    descricao: string;
    valor: number;
    emissao: string;
    vencimento: string;
    idConta: number;
    tipo: number;
    pago: string;
  }) => {
    const response = await api.post(`/lancamentos/novolancamento`, {
      descricao,
      valor,
      emissao,
      vencimento,
      idConta,
      tipo,
      pago,
    });
    return response.data as IDespesa;
  },
);

const initialState = {
  user: {
    id: 0,
    email: '',
    imagemUrl: '',
    nome: '',
  },
  lancamento: {
    descricao: '',
    valor: 0,
    emissao: '',
    vencimento: '',
    idConta: 0,
    tipo: 0,
    pago: '',
  },
} as unknown as AccountState;

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload;
    });
    builder.addCase(postLancamento.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.lancamento = action.payload;
    });
  },
});

export default accountSlice.reducer;
