import { CreatePetDTO } from './dtos/createPet.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('pets')
export class PetsController {
  @Get()
  async getAllPets() {
    return JSON.stringify({ pet1: 'teste' });
  }

  @Post()
  async createPet(@Body() createPet: CreatePetDTO) {
    return createPet;
  }
}
