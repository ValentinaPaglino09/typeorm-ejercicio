import { IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateRolDto {
    @ApiProperty()
    @IsString()
    nombre: string
}