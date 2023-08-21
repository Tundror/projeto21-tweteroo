import { Body, Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { CreateTweetDto } from '../dtos/tweet.dto';

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
  @Get('/:username')
  getTweetsByUser(@Param('username') username: string) {
    return this.tweetsService.getTweetByUsername(username)
  }
}