export interface LoginFormData{
    email:string;
}
export interface OTPFormData extends LoginFormData{
    otp:string;
}
export interface LoginResponse{
    email:string;
    first_name:string;
    access_token:string;
    role:string;
}