import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreatePetImgsDto } from './dtos/createPetImageDto';
import { PetImgsService } from './pet-imgs.service';
import { PetImgs } from './petImgs.entity';

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

  @Get(':petId/imgs')
  async findImgsByPetId(@Param('petId') petId: number): Promise<PetImgs[]> {
    return this.petImgsService.findImgsByPetId(petId);
  }
}
