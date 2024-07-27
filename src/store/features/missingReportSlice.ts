import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  gender: '',
  dateOfBirth: '',
  nickname: '',
  height: '',
  weight: '',
  eyeColor: '',
  hairColor: '',
  length: '',
};

const missingReportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    handleChange: (
      state,
      action: PayloadAction<{name: string; value: string}>,
    ) => {
      const {name, value} = action.payload;
      return {
        ...state,
        [name]: value,
      };
    },
  },
  selectors: {
    selectFullName: data => data.fullName,
    selectGender: data => data.gender,
    selectDateOfBirth: data => data.dateOfBirth,
    selectNickname: data => data.nickname,
    selectHeight: data => data.height,
    selectWeight: data => data.weight,
    selectEyeColor: data => data.eyeColor,
    selectHairColor: data => data.hairColor,
    selectLength: data => data.length,
  },
});

export const {handleChange} = missingReportSlice.actions;

export const {
  selectDateOfBirth,
  selectEyeColor,
  selectGender,
  selectHairColor,
  selectHeight,
  selectLength,
  selectFullName,
  selectNickname,
  selectWeight,
} = missingReportSlice.selectors;

export default missingReportSlice.reducer;
