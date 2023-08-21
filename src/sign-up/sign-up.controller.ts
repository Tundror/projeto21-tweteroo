import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/user.dto';
import { SignUpService } from './sign-up.service';

@Controller('sign-up')
export class SignUpController {
  constructor(private readonly signUpService: SignUpService) {}

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.signUpService.createUser(body)
  }
}
