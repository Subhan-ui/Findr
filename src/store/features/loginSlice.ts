import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  password: '',
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
  },
  selectors: {
    selectName: data => data.name,
    selectEmail: data => data.email,
    selectPassword: data => data.password,
  },
});

export const {handleChangeName, handleChangeEmail, handleChangePassword} =
  loginSlice.actions;
export const {selectName, selectEmail, selectPassword} = loginSlice.selectors;
export default loginSlice.reducer;
