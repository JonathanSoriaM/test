import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateFraseDTO } from './dto/frase.dto';
import { FraseService } from './frase.service';

@Controller('frase')
export class FraseController 
{
    constructor(private fraseService: FraseService){}
    @Post('/create')
    async createPost(@Res() res, @Body() createFraseDTO : CreateFraseDTO){
        const frase = await this.fraseService.createFrase(createFraseDTO)
        return res.status(HttpStatus.OK).json({
            message: 'Empleado Created',
            frase
        })
    }

  @Get()
   async getFrases(@Res() res){
    const getFraces = await this.fraseService.getFrases()
    return res.status(HttpStatus.OK).json({
        message:' Frases',
       getFraces
    })
   }

  @Get('/frasesID')
   async getFrace(@Res() res, @Param('fraseID') fraseID){
       const frase = await this.fraseService.getFrase(fraseID)
       if(!frase) throw new NotFoundException('La frase no existe')
       return res.status(HttpStatus.OK).json({
           messaje : 'Frase',
           frase
       })
       
   }

  @Delete('/delete')
    async deleteFrace(@Res() res, @Query('fraseID') fraseID){
        const delFrase = await this.fraseService.deleteFrase(fraseID)
        if(!delFrase) throw new NotFoundException('Frase no existe')
        return res.status(HttpStatus.OK).json({
            messaje: 'Frase borrada',
            delFrase
        })
    } 

  @Put('/update')
   async updateFrase(@Res() res, @Body() createFraseDTO: CreateFraseDTO,@Query('fraseID') fraseID){
       const upFrase = await this.fraseService.updateFrase(fraseID, createFraseDTO)
       if(!upFrase) throw new NotFoundException('Empleado Does not Exist')
       return res.status(HttpStatus.OK).json({
           messaje: 'Empleado Updated',
           upFrase
       })
   }  
}


