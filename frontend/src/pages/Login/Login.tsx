import { useForm } from 'react-hook-form';
import styles from './Login.module.scss'
import Input from '../../components/Input/Input';
import { PrimaryBtn } from '../../components/Button/Button';
import {type LoginFormData, type OTPFormData} from './Login.type'
import { emailValidation, otpValidation } from '../../app/formValidations/formValidations';
import { useReducer } from 'react';
import { formReducer, initialState } from './Login.State';
import FormError from '../../components/FormError/FormError';
import { FORM_ACTIONS } from '../../constants/FormConstants';

const Login=()=>{
    const getOTPForm= useForm<LoginFormData>()
    const verifyOTPForm= useForm<OTPFormData>()
    const [{showOTPForm}, dispatch]= useReducer(formReducer, initialState);

    const onGetOTP=async(data: LoginFormData)=>{
        dispatch({type: FORM_ACTIONS.SHOW_OTP_FORM});
    }

    const onVerifyOTP= async(data: OTPFormData)=>{
        dispatch({type: FORM_ACTIONS.HIDE_OTP_FORM})
    }

    return(
        <section className={styles.section}>
            <div className={styles.login}>
                <h3>Log in to continue</h3>
                {
                   !showOTPForm ? 
                   <>
                   <form onSubmit={getOTPForm.handleSubmit(onGetOTP)}>
                        <div>
                            <Input label='Email' placeholder='Enter your email' type='email' {...getOTPForm.register('email', emailValidation)}/>
                            {getOTPForm.formState.errors?.email && <FormError>{getOTPForm.formState.errors?.email?.message}</FormError>}
                        </div> 
                        <div className={styles.btn}>
                            <PrimaryBtn type='submit'>Get OTP</PrimaryBtn>
                        </div>
                   </form> 
                   </>
                   :
                   <form onSubmit={verifyOTPForm.handleSubmit(onVerifyOTP)}>
                        <Input label='Email' value={getOTPForm.getValues('email')} {...verifyOTPForm.register('email')} disabled/>
                        <div>
                            <Input label='Enter OTP' placeholder='Enter OTP' type='number' {...verifyOTPForm.register('otp', otpValidation)}/>
                            {verifyOTPForm.formState.errors?.otp && <FormError>{verifyOTPForm.formState.errors?.otp?.message}</FormError>}
                        </div>
                        <div className={styles.btn}>
                            <PrimaryBtn type='submit'>Verify OTP</PrimaryBtn>
                        </div>
                   </form>
                }
            </div>  
        </section>
    )
}
export default Login;