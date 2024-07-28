import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type stateTypes = {
  name: string;
  email: string;
  password: string;
  user: {
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
    uid: string | null;
  } | null;
};

const initialState: stateTypes = {
  name: '',
  email: '',
  password: '',
  user: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    handleChangeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    handleChangeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    handleChangePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    handleUser: (
      state,
      action: PayloadAction<{
        displayName: string | null;
        email: string | null;
        photoURL: string | null;
        uid: string | null;
      }>,
    ) => {
      state.user = {...action.payload};
    },
    handleUserNull: state => {
      state.user = null;
    },
  },
  selectors: {
    selectName: data => data.name,
    selectEmail: data => data.email,
    selectPassword: data => data.password,
    selectUser: data => data.user,
  },
});

export const {
  handleChangeName,
  handleChangeEmail,
  handleChangePassword,
  handleUser,
  handleUserNull,
} = loginSlice.actions;
export const {selectName, selectEmail, selectPassword, selectUser} =
  loginSlice.selectors;
export default loginSlice.reducer;
