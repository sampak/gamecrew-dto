import { IsEmail, IsNotEmpty } from 'class-validator';

export class ISignInRequest {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}