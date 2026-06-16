export interface LoginFormData{
    email:string;
}
export interface OTPFormData extends LoginFormData{
    otp:string;
}
export interface LoginResponse{
    email:string | null;
    first_name:string | null;
    access_token:string | null;
    role:string | null;
}
export interface getOTPResponse{
    message:string;
}