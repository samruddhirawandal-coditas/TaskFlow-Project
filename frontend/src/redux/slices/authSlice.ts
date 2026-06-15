import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { authState } from "./authSlice.type";
import type { LoginResponse } from "../../pages/Login/Login.type";
import type { RootState } from "../store/store";
const initialState:authState={
    isAuthenticated:false,
    email:null,
    first_name:null,
    role:null,
    access_token:null
}

export const authSlice= createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state, action:PayloadAction<LoginResponse>)=>{
            console.log(action.payload);
            console.log(state.isAuthenticated);
            state.isAuthenticated=true;
            state.email= action.payload.email;
            state.first_name= action.payload.first_name;
            state.access_token=action.payload.access_token;
            state.role= action.payload.role
            console.log(state.isAuthenticated);
        },
        logout:(state)=>{
            state.email=null;
            state.access_token=null;
            state.role=null;
            state.first_name=null;
            state.isAuthenticated=false;
        }
        
    }
})
export const { login, logout } = authSlice.actions;
export const selectCurrentRole = (state:RootState) => state.auth.role;
export const selectCurrentUsername = (state:RootState) => state.auth.first_name;
export const selectCurrentUserEmail = (state:RootState) => state.auth.email;
export const selectIsAuthenticated=(state:RootState) => state.auth.isAuthenticated;
export default authSlice.reducer;