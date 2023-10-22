import { PetsService } from './pets.service';
import { CreatePetDTO } from './dtos/createPet.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PetEntity } from './interfaces/pets.entity';

@Controller('pets')
export class PetsController {
  constructor(private readonly petService: PetsService) {}

  @Get()
  async getAllPets(): Promise<PetEntity[]> {
    return this.petService.getAllPets();
  }

  @Post()
  async createPet(@Body() createPet: CreatePetDTO): Promise<PetEntity> {
    return this.petService.createPet(createPet);
  }
}
