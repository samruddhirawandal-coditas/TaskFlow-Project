import { FORM_ACTIONS } from "../../constants/FormConstants";
import type { FormAction, FormState } from "./Login.State.type";

export const initialState: FormState={
    showOTPForm: false,
    showToast:false
}

export const formReducer=(state: FormState, action:FormAction)=>{
    switch(action.type){
        case FORM_ACTIONS.TOGGLE_OTP_FORM: return {...state, showOTPForm: !state.showOTPForm};
        case FORM_ACTIONS.TOGGLE_TOAST: return {...state, showToast: !state.showToast};
        default: return state;
    }
}