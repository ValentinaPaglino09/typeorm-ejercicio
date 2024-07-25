import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { Auto } from './entities/auto.entity';

@Injectable()
export class AutosService {

  constructor(
    @InjectRepository(Auto)
    private readonly autosRepository: Repository<Auto>
  ){}

  async create(auto: CreateAutoDto) {
   return this.autosRepository.save(auto)
  }

  async findAll() {
    return this.autosRepository.find({relations: {user: true}})
  }

  async findOne(id: number) {
    const auto = await this.autosRepository.findOne({where: {id: Equal(id)}, relations: {user: true}})
    if (!auto) throw new NotFoundException(`El auto con id ${id} no existe.`)
    return auto
  }

  async update(id: number, auto: UpdateAutoDto) {
    const autoPorId = this.autosRepository.findOne({where: {id: Equal(id)}}) 
    if (!autoPorId) throw new NotFoundException(`El auto con id ${id} no existe.`)
      await this.autosRepository.update({id}, auto)
  }

  async remove(id: number) {
    const autoPorId = this.autosRepository.findOne({where: {id: Equal(id)}}) 
    if (!autoPorId) throw new NotFoundException(`El auto con id ${id} no existe.`)
    await this.autosRepository.softDelete({id: id})
    return "Auto eliminado."
  }
}
