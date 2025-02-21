export interface SignUpFormValues {
  email: string;
}

export interface SignInFormValues {
  email: string;
  password: string;
}

export interface ResetPasswordFormValues {
  new_password: string;
  confirm_password: string;
}

export interface VerificationFormValue {
  otp: string;
}
