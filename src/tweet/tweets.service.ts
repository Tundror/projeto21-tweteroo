import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTweetDto } from '../dtos/tweet.dto';
import { Tweet } from '../entities/tweet.entity';
import { User } from '../entities/user.entity';
import { SignUpService } from '../sign-up/sign-up.service';

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
    const slicedTweets = this.tweets.slice(page > 1 ? initialItem -1 : initialItem, page > 1 ? finalItem -1 : finalItem)
    const tweetsReturn = slicedTweets.map((tweet) => tweet.getUserInfo());

    return tweetsReturn
  }

  getTweetByUsername(username: string) {
    const filteredTweets = this.tweets.filter((tweet) => {
        return tweet.getUserInfo().username === username
    })
    console.log(filteredTweets)
    if (filteredTweets.length === 0) return []
    const tweetsReturn = filteredTweets.map((tweet) => tweet.getUserInfo());
    return tweetsReturn
  }
}