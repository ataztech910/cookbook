import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authSlice from './authSlice';
import { createWrapper } from "next-redux-wrapper";
import { LoginService } from '../api/core/login.service'

const apiCallMiddleware = (store) => (next) => (action) => {
  console.log("action", action);
  LoginService.getInstance().anyAPICall();
  next(action);
};

export const store = configureStore({
  middleware: (getDefaultMiddleware: any) =>
                    getDefaultMiddleware()
                      .concat(apiCallMiddleware),
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
  devTools: true,
});


const makeStore = () => store;

export type RootState = ReturnType<typeof store>
export type AppDispatch = typeof store.dispatch
export const wrapper = createWrapper<RootState>(makeStore);