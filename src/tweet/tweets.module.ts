import { Module } from '@nestjs/common';
import { SignUpModule } from 'src/sign-up/sign-up.module';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';

@Module({
  imports: [SignUpModule],
  controllers: [TweetsController],
  providers: [TweetsService],
})
export class TweetsModule {}
