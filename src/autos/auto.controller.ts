import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import { AutosService } from './auto.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Autos')
@Controller('autos')
export class AutosController {
  constructor(private readonly autosService: AutosService) {}

  @Post()
  create(@Body() user: CreateAutoDto) {
    return this.autosService.create(user);
  }

  @Get()
  findAll() {
    return this.autosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.autosService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() auto: UpdateAutoDto) {
    await this.autosService.update(+id, auto);
    
  }

  @Delete(':name')
  remove(@Param('id') id: string) {
    return this.autosService.remove(+id);
  }
}
