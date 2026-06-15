import { useForm } from 'react-hook-form';
import styles from './Login.module.scss'
import Input from '../../components/Input/Input';
import { PrimaryBtn } from '../../components/Button/Button';
import {type LoginFormData, type OTPFormData} from './Login.type'
import { emailValidation, otpValidation } from '../../app/formValidations/formValidations';
import { useReducer } from 'react';
import { formReducer, initialState } from './Login.State';

const Login=()=>{
    const getOTPForm= useForm<LoginFormData>({mode: "onChange"})
    const verifyOTPForm= useForm<OTPFormData>({mode: "onChange"})
    const [{setShowOTPForm}, dispatch]= useReducer(formReducer, initialState);

    const onGetOTP=async(data: LoginFormData)=>{
        dispatch({type:'SHOW_OTP_FORM'});
    }

    const onVerifyOTP= async(data: OTPFormData)=>{
    }

    return(
        <section className={styles.section}>
            <div className={styles.login}>
                <h3>Log in to continue</h3>
                {
                   !setShowOTPForm ? 
                   <>
                   <form onSubmit={getOTPForm.handleSubmit(onGetOTP)}>
                         <div>
                            <Input label='Email' placeholder='Enter your email' type='email' {...getOTPForm.register('email', emailValidation)}/>
                            {getOTPForm.formState.errors?.email && <span className={styles.errorMsg}> {getOTPForm.formState.errors?.email?.message}</span>}
                        </div> 
                        <div className={styles.btn}>
                            <PrimaryBtn>Get OTP</PrimaryBtn>
                        </div>
                   </form> 
                   </>
                   :
                   <form onSubmit={verifyOTPForm.handleSubmit(onVerifyOTP)}>
                        <Input label='Email' value={getOTPForm.getValues('email')} {...verifyOTPForm.register('email')} disabled/>
                        <div>
                            <Input label='Enter OTP' placeholder='Enter OTP' type='number' {...verifyOTPForm.register('otp', otpValidation)}/>
                            {verifyOTPForm.formState.errors?.otp && <span className={styles.errorMsg}> {verifyOTPForm.formState.errors?.otp?.message}</span>}
                        </div>
                        <div className={styles.btn}>
                            <PrimaryBtn>Verify OTP</PrimaryBtn>
                        </div>
                   </form>
                }
            </div>  
        </section>
    )
}
export default Login;