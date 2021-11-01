import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DiscordService } from 'src/services';

@Module({
  imports: [HttpModule],
  providers: [DiscordService],
  exports: [DiscordService]
})
export class ServicesModule {}
