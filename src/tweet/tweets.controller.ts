import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/user.dto';
import { TweetsService } from './tweets.service';
import { CreateTweetDto } from 'src/dtos/tweet.dto';
import { SignUpService } from 'src/sign-up/sign-up.service';

@Controller('tweets')
export class TweetsController {
    constructor(
        private readonly tweetsService: TweetsService,
    ) { }

    @Post()
    createTweet(@Body() body: CreateTweetDto) {
        return this.tweetsService.createTweet(body)
    }

    @Get()
  getTweets(@Query('page') page?: string) {
    const parsedPage = parseInt(page)
    return this.tweetsService.getTweet(parsedPage);
  }
}