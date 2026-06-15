import { FORM_ACTIONS } from "../../constants/FormConstants";
import type { FormAction, FormState } from "./Login.State.type";

export const initialState: FormState={
    showOTPForm: false
}

export const formReducer=(state: FormState, action:FormAction)=>{
    switch(action.type){
        case FORM_ACTIONS.SHOW_OTP_FORM: return {...state, showOTPForm:true};
        case FORM_ACTIONS.HIDE_OTP_FORM: return {...state, showOTPForm:false};
        default: return state;
    }
}