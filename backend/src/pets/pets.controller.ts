import { PetsService } from './pets.service';
import { CreatePetDTO } from './dtos/createPet.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Pet } from './interfaces/pets.interface';

@Controller('pets')
export class PetsController {
  constructor(private readonly petService: PetsService) {}

  @Get()
  async getAllPets(): Promise<Pet[]> {
    return this.petService.getAllPets();
  }

  @Post()
  async createPet(@Body() createPet: CreatePetDTO): Promise<Pet> {
    return this.petService.createPet(createPet);
  }
}
