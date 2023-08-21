import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/user.dto';
import { SignUpService } from './sign-up.service';

@Controller('sign-up')
export class SignUpController {
  constructor(private readonly signUpService: SignUpService) {}

  @Post()
  @HttpCode(200)
  createUser(@Body() body: CreateUserDto) {
    this.signUpService.createUser(body)
    return HttpStatus.OK
  }
}
