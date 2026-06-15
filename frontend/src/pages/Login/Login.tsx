import { useForm } from 'react-hook-form';
import styles from './Login.module.scss'
import Input from '../../components/Input/Input';
import { PrimaryBtn } from '../../components/Button/Button';
import {type LoginFormData, type LoginResponse, type OTPFormData} from './Login.type'
import { emailValidation, otpValidation } from '../../app/formValidations/formValidations';
import { useEffect, useReducer, useState } from 'react';
import { formReducer, initialState } from './Login.State';
import FormError from '../../components/FormError/FormError';
import { FORM_ACTIONS } from '../../constants/FormConstants';
import { useGetOTPMutation, useVerifyOTPMutation } from '../../services/AuthService/authService';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/RouteConstants';
import { login } from '../../redux/slices/authSlice';
import Toast from '../../components/Toast/Toast';

const Login=()=>{
    const dispatch= useDispatch();
    const navigate= useNavigate();
    const getOTPForm= useForm<LoginFormData>()
    const verifyOTPForm= useForm<OTPFormData>()
    const [{showOTPForm, showToast}, formDispatch]= useReducer(formReducer, initialState);
    const [resendTimer, setResendTimer]= useState(40);

    const [getOtp, onGetOtp]= useGetOTPMutation();
    const [verifyOtp, onVerifyOtp]= useVerifyOTPMutation();

    const onGetOTP=async(data: LoginFormData)=>{
        await getOtp(data).unwrap();
        formDispatch({type: FORM_ACTIONS.TOGGLE_OTP_FORM});
        formDispatch({type:FORM_ACTIONS.TOGGLE_TOAST});

        setTimeout(()=>{
            formDispatch({type:FORM_ACTIONS.TOGGLE_TOAST});
        }, 3000);
        setResendTimer(40);
    }

    const onVerifyOTP= async(data: OTPFormData)=>{
        const response:LoginResponse=await verifyOtp(data).unwrap();
        dispatch(login(response));
        formDispatch({type: FORM_ACTIONS.TOGGLE_OTP_FORM})
        navigate(ROUTES.DASHBOARD);
    }
    
    const handleResendOTP=async()=>{
        const email= getOTPForm.getValues('email');
        await getOtp({email}).unwrap();
        setResendTimer(40);
    }

    useEffect(() => {
        if (resendTimer <= 0)  return;
        const timer = setTimeout(() => {
            setResendTimer(
                (prev) => prev - 1
            );
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [resendTimer]);

    return(
        <section className={styles.section}>
            {showToast && <Toast msg='OTP send Successfully'/>}
            <div className={styles.login}>
                <h3>Log in to continue</h3>
                {
                   !showOTPForm ? 
                   <>
                   <form onSubmit={getOTPForm.handleSubmit(onGetOTP)}>
                        <div>
                            <Input label='Email' placeholder='Enter your email' type='email' {...getOTPForm.register('email', emailValidation)}/>
                            {(getOTPForm.formState.errors?.email || onGetOtp.error) && <FormError>{getOTPForm.formState.errors?.email?.message || 'Failed to send OTP'}</FormError>}
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
                            {(verifyOTPForm.formState.errors?.otp || onVerifyOtp.error) && <FormError>{verifyOTPForm.formState.errors?.otp?.message || 'Enter correct OTP'}</FormError>}
                        </div>
                         <div>
                            {resendTimer > 0 ? 
                            (<span className={styles.timer}>Resend OTP in{" "}{resendTimer}s</span>) : 
                            (<button type="button" onClick={handleResendOTP} className={styles.resendBtn}>Resend OTP</button>)}
                        </div>
                        <div className={styles.btn}>
                            <PrimaryBtn type='submit' disabled={resendTimer===0}>Verify OTP</PrimaryBtn>
                        </div>
                   </form>
                }
            </div>  
        </section>
    )
}
export default Login;