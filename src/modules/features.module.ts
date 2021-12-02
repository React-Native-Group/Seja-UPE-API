import { CacheModule, Module } from '@nestjs/common';

@Module({
  imports: [
    CacheModule.register({
      ttl: 7200 //Tempo de vida de 7200 segundos do Cache.
    })
  ]
})
export class FeaturesModule {}
