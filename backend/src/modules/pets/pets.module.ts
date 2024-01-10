import { Pet } from './pets.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';
import { Cities } from '../cities/cities.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pet, Cities])],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
