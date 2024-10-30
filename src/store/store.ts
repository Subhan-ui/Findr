import {combineReducers, configureStore} from '@reduxjs/toolkit';
import loginSlice from './slices/login.slice';
import missingReportSlice from './slices/missingReport.slice';
import reportSlice from './slices/report.slice';

const rootReducer = combineReducers({
  login: loginSlice,
  report: missingReportSlice,
  found: reportSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
