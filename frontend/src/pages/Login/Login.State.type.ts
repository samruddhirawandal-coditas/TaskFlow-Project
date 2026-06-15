import { FORM_ACTIONS } from '../../constants/FormConstants';
export interface FormState{
    showOTPForm: boolean;
}

export type FormAction={type: typeof FORM_ACTIONS.TOGGLE_OTP_FORM}
