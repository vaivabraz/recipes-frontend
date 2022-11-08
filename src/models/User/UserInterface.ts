import { Document } from 'mongoose';

export interface UserInterface {
  email: string;
  username: string;
  password: string;
  loginType: string; //TODO: sukonkretinti kokie galimi
  userCategories: UserCategories[];
  tokenVersion: number;
}

type UserCategories = {
  id: string;
  title: string;
};

interface UserBaseDocument extends UserInterface, Document {
  //galima prideti dalyku, kas nera duombazeje
}

export interface UserDocument extends UserBaseDocument {}
