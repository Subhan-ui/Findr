import {combineReducers, configureStore} from '@reduxjs/toolkit';
import loginSlice from './features/loginSlice';
import missingReportSlice from './features/missingReportSlice';

const rootReducer = combineReducers({
  login: loginSlice,
  report: missingReportSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
