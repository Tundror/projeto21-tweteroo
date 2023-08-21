import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, IsUrl } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsUrl()
  @IsNotEmpty()
  avatar: string;
}