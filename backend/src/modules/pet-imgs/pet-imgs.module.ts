import { Module } from '@nestjs/common';
import { PetImgsService } from './pet-imgs.service';
import { PetImgsController } from './pet-imgs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetImgs } from './petImgs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PetImgs])],
  providers: [PetImgsService],
  controllers: [PetImgsController]
})
export class PetImgsModule {}
