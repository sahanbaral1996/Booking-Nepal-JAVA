import { CognitoUser } from 'amazon-cognito-identity-js';

export interface IUser {
  username: string;
  password: string;
  name: string,
  phone: string,
  city: string,
  address:string,
}

interface IUserAttributes {
  email: string;
  firstName: string;
  lastName: string;
  isEmailVerified: boolean;
}
export interface ICognitoUserDetails {
  user: CognitoUser;
  attributes: IUserAttributes;
}