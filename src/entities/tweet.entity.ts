import { User } from "./user.entity";

export class Tweet {
    private user: User;
    private tweet: string;
  
    constructor(user: User, tweet: string) {
      this.user = user;
      this.tweet = tweet
    }

    getUserInfo() {
        return {
            username: this.user.getUsername(),
            avatar: this.user.getAvatar(),
            tweet: this.tweet
        };
    }

    getTweet() {
        return this.tweet
    }
  }