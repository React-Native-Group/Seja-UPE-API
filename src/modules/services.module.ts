import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MailerService } from 'src/services';

@Module({
  imports: [HttpModule],
  providers: [MailerService],
  exports: [MailerService]
})
export class ServicesModule {}
