import { FORM_ACTIONS } from '../../constants/FormConstants';
export interface FormState{
    showOTPForm: boolean;
}

export type FormAction=
|{type: typeof FORM_ACTIONS.SHOW_OTP_FORM}
|{type: typeof FORM_ACTIONS.HIDE_OTP_FORM}