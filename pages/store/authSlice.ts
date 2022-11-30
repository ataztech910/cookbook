import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

export type AuthState = {
    isLoggedIn?: boolean;
    token?: string | null;
    userProperties?: Array<string>
}

export const INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    token: null,
    userProperties: [],
};

const authSlice = createSlice({
  name: "auth",
  reducers: {
    changeAuthState: (state: RootState, action: PayloadAction<AuthState>) => {
        const newAuth = action.payload;
        state = {...newAuth };
        console.log('new state', state);
        return state;
    }
  },
  initialState: INITIAL_STATE, 
});

export const selectAuthState = (state: RootState) => {
    return state.auth.isLoggedIn;
}
export const { changeAuthState } = authSlice.actions;
export default authSlice;