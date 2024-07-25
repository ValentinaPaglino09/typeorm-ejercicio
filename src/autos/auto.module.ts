import { Module } from '@nestjs/common';
import { AutosService } from './auto.service';
import { AutosController } from './auto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auto } from './entities/auto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Auto])],
  controllers: [AutosController],
  providers: [AutosService],
})
export class AutosModule {}
