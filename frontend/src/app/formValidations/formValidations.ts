export const emailValidation={
      required: "Required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address"
      }
}

export const otpValidation={
    required:"Required",
    pattern:{
        value: /^\d{4}$/,
        message: 'Invalid OTP'
    }
}