export type TUser = {
  name: string | null;
  email: string | null;
  role: string | null;
  iat: number;
  exp: number;
};

export type TFullUser = {
  _id: string;
  name: string;
  email: string;
  address: string;
  confirmPassword: string;
  phone: string;
  role: string;
};
