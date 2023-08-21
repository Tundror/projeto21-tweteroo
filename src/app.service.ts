import { Injectable } from '@nestjs/common';
import { Tweet } from './entities/tweet.entity';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dtos/user.dto';

@Injectable()
export class AppService {
  private tweet: Tweet[];
  private users: User[]


  getHello(): string {
    return 'Hello World!';
  }

  createUser(body: CreateUserDto) {
    const {username, avatar} = body
    return this.users.push(new User(username, avatar))
  }
}
