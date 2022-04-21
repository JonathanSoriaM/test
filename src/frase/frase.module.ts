import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FraseController } from './frase.controller';
import { FraseService } from './frase.service';
import { FraseSchema } from 'src/schemas/frase.chema';


@Module({
  imports: [
    MongooseModule.forFeature([
      {name : 'Product', schema:FraseSchema }
    ])
  ],
  controllers: [FraseController],
  providers: [FraseService]
})
export class FraseModule {}
