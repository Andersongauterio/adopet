import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateEstateDto } from './dtos/createEstateDto';
import { EstatesService } from './estates.service';

@Controller('estates')
export class EstatesController {
  constructor(private readonly estatesService: EstatesService) { }

  @Post()
  create(@Body() createEstateDto: CreateEstateDto) {
    return this.estatesService.create(createEstateDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estatesService.findOne(id);
  }

  @Get()
  findAll() {
    return this.estatesService.findAll();
  }
}
