import { IsEmail, IsNotEmpty, IsObject, IsString, IsStrongPassword } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateTweetDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  tweet: string;
}