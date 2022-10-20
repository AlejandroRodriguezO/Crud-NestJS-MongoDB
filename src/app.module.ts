import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [AccountModule, MongooseModule.forRoot('mongodb+srv://dbTest:R8RU6f9mwnuabnkI@nestjs.8woatdq.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}