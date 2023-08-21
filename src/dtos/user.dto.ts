import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, IsUrl } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: "All fields are required!" })
  username: string;

  @IsUrl()
  @IsNotEmpty({ message: "All fields are required!" })
  avatar: string;
}