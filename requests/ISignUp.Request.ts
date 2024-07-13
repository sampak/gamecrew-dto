import { IsEmail, IsNotEmpty } from "class-validator";

export class ISignUpRequest {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  login: string;
  @IsNotEmpty()
  password: string;
}
