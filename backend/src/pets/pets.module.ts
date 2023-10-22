import { PetEntity } from './interfaces/pets.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';

@Module({
  imports: [TypeOrmModule.forFeature([PetEntity])],
  controllers: [PetsController],
  providers: [PetsService],
})
export class PetsModule {}
