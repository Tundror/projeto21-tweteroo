import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTweetDto } from 'src/dtos/tweet.dto';
import { Tweet } from 'src/entities/tweet.entity';
import { User } from 'src/entities/user.entity';
import { SignUpService } from 'src/sign-up/sign-up.service';

@Injectable()
export class TweetsService {
    private tweets: Tweet[];

    constructor(private readonly signUpService: SignUpService) {
        this.tweets = [];
      }

  createTweet(body: CreateTweetDto) {
    const {username, tweet} = body
    const users = this.signUpService.getUsers();
    
    const userIndex = users.findIndex((user: User) => user.getUsername() === username);

        if (userIndex !== -1) {
            this.tweets.push(new Tweet(users[userIndex], tweet));
            return HttpStatus.OK;
        } else {
            throw new HttpException("Usuario nao cadastrado", HttpStatus.UNAUTHORIZED)
        }
  }

  getTweet(page: number) {
    if(page <= 0) throw new HttpException("Informe uma página válida!", HttpStatus.BAD_REQUEST)
    const finalItem = page*15 | 15
    const initialItem = finalItem - 15
    const slicedTweets = this.tweets.slice(initialItem, finalItem)
    const tweetsReturn = slicedTweets.map((tweet) => tweet.getUserInfo());

    return tweetsReturn
  }
}