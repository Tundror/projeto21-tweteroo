import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class SignUpService {
  private users: User[]

  constructor() {
    this.users = [];
  }

  getUsers(): User[] {
    return this.users;
  }

  createUser(body: CreateUserDto) {
    const {username, avatar} = body
    console.log(this.users)
    return this.users.push(new User(username, avatar))
  }
}