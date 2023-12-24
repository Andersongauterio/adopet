import { PetsService } from './pets.service';
import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { CreatePetDto } from './dtos/createPet.dto';
import { Pet } from './pets.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('pets')
export class PetsController {
  constructor(private readonly petService: PetsService) {}

  @Get()
  async getAllPets(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10
  ): Promise<Pet[]> {
    limit = limit > 20 ? 20 : limit;
    return this.petService.getAllPets({
      page,
      limit,
    });
  }

  @Get(':id')
  async getPetById(@Param('id') id: number): Promise<Pet> {
    return this.petService.getPetById(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createPet(@Body() createPet: CreatePetDto): Promise<Pet> {
    return this.petService.createPet(createPet);
  }
}
