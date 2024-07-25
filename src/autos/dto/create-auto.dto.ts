import { IsInt, IsString } from "class-validator";
import { User } from "src/users/entities/users.entity";
import { ApiProperty } from '@nestjs/swagger';

export class CreateAutoDto {
 
 @ApiProperty()
 @IsString()
 patente: string;

 @ApiProperty()
 @IsString()
 marca: string;

 @ApiProperty()
 @IsString()
 modelo: string;

 @ApiProperty()
 @IsString()
 color: string;

 @ApiProperty()
 @IsInt()
 user: User
}