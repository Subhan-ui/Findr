import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {personType} from '../../types/personTypes';
import {initialTypes} from '../../types/missingReportSliceStateTypes';

const initialState: initialTypes = {
  fullName: '',
  gender: 'male',
  dateOfBirth: '',
  nickname: '',
  height: '',
  weight: '',
  eyeColor: '',
  hairColor: '',
  length: '',
  location: '',
  date: new Date().toISOString(),
  data: [],
  searchedQuery: '',
  searchedData: [],
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
    handleChangeDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    handleStateNull: state => {
      state.dateOfBirth = '';
      state.eyeColor = '';
      state.fullName = '';
      state.gender = 'male';
      state.hairColor = '';
      state.height = '';
      state.weight = '';
      state.length = '';
      state.nickname = '';
      state.date = new Date().toISOString();
      state.location = '';
    },
    handleData: (state, action: PayloadAction<personType[]>) => {
      const sortedData = action.payload.sort((a, b) => {
        const [dayA, monthA, yearA, timeA] = a.postDate.split(/[\/, ]+/);
        const [dayB, monthB, yearB, timeB] = b.postDate.split(/[\/, ]+/);

        const dateA = new Date(`${yearA}-${monthA}-${dayA}T${timeA}`);
        const dateB = new Date(`${yearB}-${monthB}-${dayB}T${timeB}`);

        return dateB.getTime() - dateA.getTime();
      });
      state.data = sortedData;
    },
    handleFilter: (state, action: PayloadAction<string>) => {
      if (action.payload === 'all') {
        state.searchedData = state.data;
      }
      if (action.payload === 'male') {
        const male = state.data.filter(
          data => data.gender.toLowerCase() === 'male',
        );
        state.searchedData = male;
      }
      if (action.payload === 'female') {
        const female = state.data.filter(
          data => data.gender.toLowerCase() === 'female',
        );
        state.searchedData = female;
      }
      if (action.payload === 'age') {
        const sortedPeople = [...state.data].sort(
          (a, b) => parseInt(a.age, 10) - parseInt(b.age, 10),
        );
        state.searchedData = sortedPeople;
      }
    },
    handleChangeQuery: (state, action: PayloadAction<string>) => {
      state.searchedQuery = action.payload;
      if (action.payload.trim() === '') {
        state.searchedData = state.data;
      } else {
        const filterData = state.data.filter(data =>
          data.name.toLowerCase().startsWith(state.searchedQuery.toLowerCase()),
        );
        state.searchedData = filterData;
      }
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
    selectDate: data => data.date,
    selectLocation: data => data.location,
    selectData: datas => datas.data,
    selectQuery: datas => datas.searchedQuery,
    selectSearchData: datas => datas.searchedData,
  },
});

export const {
  handleChange,
  handleStateNull,
  handleChangeDate,
  handleData,
  handleFilter,
  handleChangeQuery,
} = missingReportSlice.actions;

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
  selectDate,
  selectLocation,
  selectData,
  selectQuery,
  selectSearchData,
} = missingReportSlice.selectors;

export default missingReportSlice.reducer;
