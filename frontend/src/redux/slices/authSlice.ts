import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { authState } from "./authSlice.type";
import type { LoginResponse } from "../../pages/Login/Login.type";
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
            state.isAuthenticated=true;
            state.email= action.payload.email;
            state.first_name= action.payload.first_name;
            state.access_token=action.payload.access_token;
            state.role= action.payload.role
        },
        logout:()=>initialState
    }
})
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;