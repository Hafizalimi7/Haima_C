import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

export const SignInSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const ResetPasswordSchema = yup.object().shape({
  new_password: yup.string().required("New Password is required"),
  confirm_password: yup
  .string()
  .oneOf([yup.ref("new_password"), undefined], "Password does not match")
  .required("Required"),
});

export const CreateProfileSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(/\d/, "Password must contain a number")
    .required("Password is required"),
  agreeToTerms: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});

export const VerificationSchema = yup.object().shape({
  otp: yup.string().required("Required"),
});
