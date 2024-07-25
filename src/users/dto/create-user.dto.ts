import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsString, MaxLength, Min, MinLength } from 'class-validator';
import { Direccion } from 'src/direcciones/entities/direccion.entity';
import { Lenguaje } from 'src/lenguajes/entities/lenguaje.entity';
import { Rol } from 'src/roles/entities/rol.entity';

export class CreateUserDto {

  @ApiProperty()
  @IsString()
  nombre: string;
  
  @ApiProperty()
  @IsString()
  apellido: string;
  
  @ApiProperty()
  @IsInt()
  dni: number;
 
  @ApiProperty()
  @IsNumber()
  direccion: Direccion
 
  @ApiProperty()
  @IsNumber()
  rol: Rol

  @ApiProperty()
  @IsNumber()
  lenguaje: Lenguaje 
}
