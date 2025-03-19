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
  phoneNumber: string;
  date_of_birth: string;
}

export type Transaction = {
  id: string;
  type: "purchase" | "deposit";
  title: string;
  time: Date;
  amount: string;
  createdAt: string;
};

export interface DeleteAccountFormValue {
  reason: string;
  agreeToTerms: boolean;
}
