import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  // agreeToTerms: yup
  //   .boolean()
  //   .oneOf([true], "You must accept the terms and conditions")
  //   .required("You must accept the terms and conditions"),
});

export const VerificationSchema = yup.object().shape({
  otp_code: yup.string().required("Required"),
});
