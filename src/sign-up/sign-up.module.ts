import { Module } from '@nestjs/common';
import { SignUpService } from './sign-up.service';
import { SignUpController } from './sign-up.controller';

@Module({
  imports: [],
  controllers: [SignUpController],
  providers: [SignUpService],
  exports: [SignUpService]
})
export class SignUpModule {}
