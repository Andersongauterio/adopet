import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreatePetImgsDto } from './dtos/createPetImageDto';
import { UpdatePetImgsDto } from './dtos/updatePetImageDto';
import { PetImgsService } from './pet-imgs.service';
import { PetImgs } from './petImgs.entity';

@Controller('pet-imgs')
export class PetImgsController {
  constructor(private readonly petImgsService: PetImgsService) { }

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
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new Error('ID inválido');
    }
    return this.petImgsService.findOne(numericId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petImgsService.remove(+id);
  }

  @Get(':petId/imgs')
  async findImgsByPetId(@Param('petId') petId: number): Promise<PetImgs[]> {
    return this.petImgsService.findImgsByPetId(petId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePetImgDto: UpdatePetImgsDto) {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new Error('ID inválido');
    }
    return this.petImgsService.update(numericId, updatePetImgDto);
  }

}
