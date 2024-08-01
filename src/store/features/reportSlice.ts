import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { reportsType } from '../../types/reportsType';

type initialTypes = {
  location: string;
  email: string;
  description: string;
  reports: reportsType[];
};


const initialState: initialTypes = {
  location: '',
  email: '',
  description: '',
  reports: [],
};

const reportSlice = createSlice({
  name: 'found',
  initialState,
  reducers: {
    handleChangeFound: (
      state,
      action: PayloadAction<{name: string; value: string}>,
    ) => {
      const {name, value} = action.payload;
      return {
        ...state,
        [name]: value,
      };
    },
    handleReports: (state, action: PayloadAction<reportsType[]>) => {
      const sortedData = action.payload.sort((a, b) => {
        const [dayA, monthA, yearA, timeA] = a.postDate.split(/[\/, ]+/);
        const [dayB, monthB, yearB, timeB] = b.postDate.split(/[\/, ]+/);

        const dateA = new Date(`${yearA}-${monthA}-${dayA}T${timeA}`);
        const dateB = new Date(`${yearB}-${monthB}-${dayB}T${timeB}`);

        return dateB.getTime() - dateA.getTime();
      });
      state.reports = sortedData;
    },
  },
  selectors: {
    selectLocation: data => data.location,
    selectEmail: data => data.email,
    selectDescription: data => data.description,
    selectReports: data => data.reports,
  },
});

export const {handleChangeFound, handleReports} = reportSlice.actions;
export const {selectLocation, selectDescription, selectEmail, selectReports} =
  reportSlice.selectors;

export default reportSlice.reducer;
