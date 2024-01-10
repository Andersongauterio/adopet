import { PetsService } from './pets.service';
import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { CreatePetDto } from './dtos/createPet.dto';
import { Pet } from './pets.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { User } from '../users/users.entity';

@Controller('pets')
export class PetsController {
  constructor(private readonly petService: PetsService) { }

  @UseGuards(AuthGuard('jwt'))
  @Get('/mypets')
  async findMyPets(@GetUser() user: User): Promise<Pet[]> {
    console.log(user);
    return this.petService.getPetsByUserId(user.id);
  }

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
  async createPet(@Body() createPetDto: CreatePetDto, @GetUser() user: User): Promise<Pet> {
    const pet = new Pet();
    Object.assign(pet, createPetDto);
    pet.user = user;
    return this.petService.createPet(createPetDto, user);
  }

}
