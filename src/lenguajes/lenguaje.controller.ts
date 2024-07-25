import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateLenguajeDto } from './dto/create-lenguaje.dto';
import { UpdateLenguajeDto } from './dto/update-lenguaje.dto';
import { LenguajesService } from './lenguaje.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Lenguajes')
@Controller('lenguajes')
export class LenguajesController {
  constructor(private readonly lenguajesService: LenguajesService) {}

  @Post()
  create(@Body() user: CreateLenguajeDto) {
    return this.lenguajesService.create(user);
  }

  @Get()
  findAll() {
    return this.lenguajesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lenguajesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() lenguaje: UpdateLenguajeDto) {
    await this.lenguajesService.update(+id, lenguaje);
  
  }

  @Delete(':name')
  remove(@Param('id') id: string) {
    return this.lenguajesService.remove(+id);
  }
}
