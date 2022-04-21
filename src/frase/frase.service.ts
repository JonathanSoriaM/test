import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import { CreateFraseDTO } from './dto/frase.dto'
import {Frase} from './interfaces/frase.interface'

@Injectable()
export class FraseService {
    constructor(@InjectModel('Frase')private readonly fraseModel : Model<Frase> ){}


    async getFrases(): Promise<Frase[]>{
        const frases = await this.fraseModel.find()
        return frases
     }
 
     async getFrase(fraseID :string): Promise<Frase>{
         const frase = await this.fraseModel.findById(fraseID);
         return frase;
     }
 
     async createFrase(createFraseDTO : CreateFraseDTO):Promise<Frase>{
         const newFrase = new this.fraseModel(createFraseDTO);
         return await newFrase.save();
       
     }
 
     async deleteFrase(fraseID : string ): Promise<Frase>{
         const deleteFrase = await this.fraseModel.findByIdAndDelete(fraseID)
         return deleteFrase;
     }
 
     async updateFrase(fraseID : string , createFraseDTO : CreateFraseDTO): Promise<Frase>{
         const updatedProdut = await this.fraseModel.findByIdAndUpdate(fraseID, createFraseDTO,{new:true });
         return updatedProdut;
 
     }
}
