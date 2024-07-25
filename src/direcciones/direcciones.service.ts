import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDireccionDto } from './dto/create-direccion.dto';
import { UpdateDireccionDto } from './dto/update-direccion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { Direccion } from './entities/direccion.entity';

@Injectable()
export class DireccionesService {

  constructor(
    @InjectRepository(Direccion)
    private readonly direccionesRepository: Repository<Direccion>
  ){}
  async create(direccion: CreateDireccionDto) {
   return this.direccionesRepository.save(direccion)
  }

  async findAll() {
   return this.direccionesRepository.find({relations: {user: true}})
  }

  async findOne(id: number) {
    const direccion = await this.direccionesRepository.findOne({where: {id: Equal(id)}, relations: {user: true}})
    if (!direccion) throw new NotFoundException(`La dirección con id ${id} no existe.`)
    return direccion
  }

  async update(id: number, direccion: UpdateDireccionDto) {
    const direccionPorId = this.direccionesRepository.findOne({where: {id: Equal(id)}}) 
    if (!direccionPorId) throw new NotFoundException(`La dirección con id ${id} no existe.`)
      await this.direccionesRepository.update({id}, direccion)
  }

  async remove(id: number) {
    const direccionPorId = this.direccionesRepository.findOne({where: {id: Equal(id)}}) 
    if (!direccionPorId) throw new NotFoundException(`La dirección con id ${id} no existe.`)
    await this.direccionesRepository.softDelete({id: id})
    return "Dirección eliminada."
  }
}
