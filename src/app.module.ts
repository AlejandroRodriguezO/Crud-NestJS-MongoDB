import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [AccountModule, MongooseModule.forRoot(ENV.ROOT)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
