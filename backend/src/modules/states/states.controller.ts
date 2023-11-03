import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateStateDto } from './dtos/createStateDto';
import { StatesService } from './states.service';

@Controller('states')
export class StatesController {
  constructor(private readonly statesService: StatesService) { }

  @Post()
  create(@Body() createStateDto: CreateStateDto) {
    return this.statesService.create(createStateDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statesService.findOne(id);
  }

  @Get()
  findAll() {
    return this.statesService.findAll();
  }
}
