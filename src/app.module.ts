import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),//para usar variables env
    MongooseModule.forRoot(process.env.MONGO_URI),//url mongodb
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
