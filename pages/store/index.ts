import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authSlice from './authSlice';
import { createWrapper } from "next-redux-wrapper";
import { LoginService } from '../api/core/login.service'
import articleSlice from './articleSlice';

const apiCallMiddleware = (store: any) => (next: any) => (action: any) => {
  console.log("action", {store, action});
  let data = null;
  if (action.type === 'article/changeArticleState' && action.payload.save) {
    data = action.payload
  }
  LoginService.getInstance().anyAPICall(data);
  next(action);
};

export const store = configureStore({
  middleware: (getDefaultMiddleware: any) =>
                    getDefaultMiddleware()
                      .concat(apiCallMiddleware),
  reducer: {
    [articleSlice.name]: articleSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
  devTools: true,
});


const makeStore = () => store;

export type RootState = ReturnType<any>
export type AppStore = ReturnType<any>
export type AppDispatch = typeof store.dispatch
export const wrapper = createWrapper<RootState>(makeStore);