import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {

constructor(
  @InjectRepository(User)
  private readonly userRepository: Repository<User>
){}

   create(user: CreateUserDto) {
   return this.userRepository.save(user)
  }

  findAll() {
   return this.userRepository.find({ relations: { rol: true, auto: true, lenguaje: true, direccion: true }})
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({where: {id: Equal(id)}, relations: {rol: true, auto: true, lenguaje: true, direccion: true}})
    if (!user) throw new NotFoundException(`El user con id ${id} no existe.`)
    return user
  }

  async update(id: number, user: UpdateUserDto) {
    const userPorId = this.userRepository.findOne({where: {id: Equal(id)}}) 
    if (!userPorId) throw new NotFoundException(`El user con id ${id} no existe.`)
      await this.userRepository.update({id}, user)
  }

  async remove(id: number) {
    const userPorId = this.userRepository.findOne({where: {id: Equal(id)}}) 
    if (!userPorId) throw new NotFoundException(`El user con id ${id} no existe.`)
      await this.userRepository.softDelete({id: id})
    return "Usuario eliminado."
  }
}
