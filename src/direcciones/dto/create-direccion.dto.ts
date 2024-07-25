import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateDireccionDto {
@ApiProperty()
@IsString()
calle: string;

@ApiProperty()
@IsNumber()
numero: number;

@ApiProperty()
@IsString()
localidad: string;

@ApiProperty()
@IsString()
provincia: string;

@ApiProperty()
@IsString()
pais: string
}