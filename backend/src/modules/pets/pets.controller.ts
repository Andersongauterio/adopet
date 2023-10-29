import { PetsService } from './pets.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PetEntity } from './pets.entity';
import { CreatePetDto } from './dtos/createPet.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petService: PetsService) {}

  @Get()
  async getAllPets(): Promise<PetEntity[]> {
    return this.petService.getAllPets();
  }

  @Post()
  async createPet(@Body() createPet: CreatePetDto): Promise<PetEntity> {
    return this.petService.createPet(createPet);
  }
}
