import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FraseController } from './frase/frase.controller';
import { FraseService } from './frase/frase.service';
import { FraseModule } from './frase/frase.module';

@Module({
  imports: [
   FraseModule,
    
    MongooseModule.forRoot('mongodb://localhost:27017/nestExample',{
    //MongooseModule.forRoot('mongodb+srv://JonathanMSoria:Rsayviento5234@cluster0-dlged.mongodb.net/apiRest?retryWrites=true&w=majority',{
      useNewUrlParser:true
    }),
  
  ],
  controllers: [AppController, FraseController],
  providers: [AppService, FraseService],
})
export class AppModule {}
