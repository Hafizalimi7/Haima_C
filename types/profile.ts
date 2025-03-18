export interface CreateProfileFormValues {
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  agreeToTerms: boolean;
}

export interface EditProfileFormValues {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  date_of_birth: string;
}
