import { FORM_ACTIONS } from "../../constants/FormConstants";
import type { FormAction, FormState } from "./Login.State.type";

export const initialState: FormState={
    showOTPForm: false
}

export const formReducer=(state: FormState, action:FormAction)=>{
    switch(action.type){
        case FORM_ACTIONS.TOGGLE_OTP_FORM: return {...state, showOTPForm: !state.showOTPForm};
        default: return state;
    }
}