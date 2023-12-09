import { PetsService } from './pets.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePetDto } from './dtos/createPet.dto';
import { Pet } from './pets.entity';

@Controller('pets')
export class PetsController {
  constructor(private readonly petService: PetsService) {}

  @Get()
  async getAllPets(): Promise<Pet[]> {
    return this.petService.getAllPets();
  }

  @Get(':id')
  async getPetById(@Param('id') id: number): Promise<Pet> {
    return this.petService.getPetById(id);
  }

  @Post()
  async createPet(@Body() createPet: CreatePetDto): Promise<Pet> {
    return this.petService.createPet(createPet);
  }
}
