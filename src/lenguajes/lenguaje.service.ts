import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLenguajeDto } from './dto/create-lenguaje.dto';
import { UpdateLenguajeDto } from './dto/update-lenguaje.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { Lenguaje } from './entities/lenguaje.entity';

@Injectable()
export class LenguajesService {

  constructor(
    @InjectRepository(Lenguaje)
    private readonly lenguajesRepository: Repository<Lenguaje>
  ){}

  async create(lenguaje: CreateLenguajeDto) {
    return this.lenguajesRepository.save(lenguaje)
  }

  async findAll() {
    return this.lenguajesRepository.find({relations: {users: true}})
  }

  async findOne(id: number) {
    const lenguaje = await this.lenguajesRepository.findOne({where: {id: Equal(id)}, relations: {users: true}})
    if (!lenguaje) throw new NotFoundException(`El lenguaje con id ${id} no existe.`)
    return lenguaje
  }

  async update(id: number, lenguaje: UpdateLenguajeDto) {
    const lengPorId = this.lenguajesRepository.findOne({where: {id: Equal(id)}}) 
    if (!lengPorId) throw new NotFoundException(`El lenguaje con id ${id} no existe.`)
      await this.lenguajesRepository.update({id}, lenguaje)
  }

  async remove(id: number) {
    const lengPorId = this.lenguajesRepository.findOne({where: {id: Equal(id)}}) 
    if (!lengPorId) throw new NotFoundException(`El lenguaje con id ${id} no existe.`)
    await this.lenguajesRepository.softDelete({id: id})
    return "Lenguaje eliminado."
  }
}
