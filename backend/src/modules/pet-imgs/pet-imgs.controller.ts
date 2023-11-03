import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreatePetImgsDto } from './dtos/createPetImageDto';
import { PetImgsService } from './pet-imgs.service';

@Controller('pet-imgs')
export class PetImgsController {
  constructor(private readonly petImgsService: PetImgsService) {}

  @Post()
  create(@Body() createPetImgsDto: CreatePetImgsDto) {
    return this.petImgsService.create(createPetImgsDto);
  }

  @Get()
  findAll() {
    return this.petImgsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petImgsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petImgsService.remove(+id);
  }
}
