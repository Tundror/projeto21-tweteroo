import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignUpModule } from './sign-up/sign-up.module';
import { TweetsModule } from './tweet/tweets.module';

@Module({
  imports: [SignUpModule, TweetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
