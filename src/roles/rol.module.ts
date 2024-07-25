import { Module } from '@nestjs/common';
import { RolesService } from './rol.service';
import { RolesController } from './rol.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from './entities/rol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rol])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
