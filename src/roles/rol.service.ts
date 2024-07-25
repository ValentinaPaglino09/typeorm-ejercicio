import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { Rol } from './entities/rol.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Rol)
    private readonly rolesRepository: Repository<Rol>
  ){}


  async create(rol: CreateRolDto) {
   return this.rolesRepository.save(rol)
  }

  async findAll() {
    return this.rolesRepository.find({relations: {users: true}})
  }

  async findOne(id: number) {
    const rol = await this.rolesRepository.findOne({where: {id: Equal(id)}, relations: {users: true}})
    if (!rol) throw new NotFoundException(`El rol con id ${id} no existe.`)
    return rol
  }

  async update(id: number, rol: UpdateRolDto) {
    const rolPorId = this.rolesRepository.findOne({where: {id: Equal(id)}}) 
    if (!rolPorId) throw new NotFoundException(`El rol con id ${id} no existe.`)
      await this.rolesRepository.update({id}, rol)
  }

  async remove(id: number) {
    const rolPorId = this.rolesRepository.findOne({where: {id: Equal(id)}}) 
    if (!rolPorId) throw new NotFoundException(`El rol con id ${id} no existe.`)
      await this.rolesRepository.softDelete({id: id})
    return "Rol eliminado."
  }
}
