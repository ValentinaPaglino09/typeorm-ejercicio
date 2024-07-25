import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateDireccionDto } from './dto/create-direccion.dto';
import { UpdateDireccionDto } from './dto/update-direccion.dto';
import { DireccionesService } from './direcciones.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Direcciones')
@Controller('direcciones')
export class DireccionesController {
  constructor(private readonly direccionesService: DireccionesService) {}

  @Post()
  create(@Body() user: CreateDireccionDto) {
    return this.direccionesService.create(user);
  }

  @Get()
  findAll() {
    return this.direccionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.direccionesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() direccion: UpdateDireccionDto) {
    await this.direccionesService.update(+id, direccion);
  
  }

  @Delete(':name')
  remove(@Param('id') id: string) {
    return this.direccionesService.remove(+id);
  }
}
