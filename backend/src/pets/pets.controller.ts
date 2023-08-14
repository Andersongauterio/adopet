import { Controller, Get } from '@nestjs/common';

@Controller('pets')
export class PetsController {
  @Get()
  async getAllPets() {
    return JSON.stringify({ pet1: 'teste' });
  }
}
