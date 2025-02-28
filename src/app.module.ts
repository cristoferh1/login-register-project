import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),//para usar variables env
    MongooseModule.forRoot(process.env.MONGO_URI),//url mongodb
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
