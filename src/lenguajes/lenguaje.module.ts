import { Module } from '@nestjs/common';
import { LenguajesService } from './lenguaje.service';
import { LenguajesController } from './lenguaje.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lenguaje } from './entities/lenguaje.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lenguaje])],
  controllers: [LenguajesController],
  providers: [LenguajesService],
})
export class LenguajesModule {}
