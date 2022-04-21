import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { FraseModule } from './frase/frase.module';

@Module({
  imports: [
   FraseModule,
    MongooseModule.forRoot('mongodb://localhost:27017/Testss',{
      useNewUrlParser:true
    }),
  
  ],
controllers: [AppController],
providers: [AppService],
})
export class AppModule {}
