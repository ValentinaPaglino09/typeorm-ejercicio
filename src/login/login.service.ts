import { BadRequestException, ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { User } from 'src/users/entities/users.entity';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class LoginService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ){}

  async login(login: CreateLoginDto) {
   const user = await this.userRepository.findOne({where: {nombre: Equal(login.nombre)}})

   if (!user) throw new UnauthorizedException()

   const token = this.jwtService.sign({user}, { expiresIn: 20 });

   return {token}
   
  }


}
