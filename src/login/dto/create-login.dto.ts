import { IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateLoginDto {
    @ApiProperty()
    @IsString()
    nombre: string

}