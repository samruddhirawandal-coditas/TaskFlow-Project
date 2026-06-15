import type { Actions, formState } from "./Login.State.type";

export const initialState: formState={
    setShowOTPForm: false
}

export const formReducer=(state: formState, action:Actions)=>{
    switch(action.type){
        case 'SHOW_OTP_FORM': return {...state, setShowOTPForm:true};
        default: return state;
    }
}