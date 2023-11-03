import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { MsgsService } from './adoption-messages.service';
import { CreateMsgDto } from './dtos/createMsgDto';

@Controller('msgs')
export class MsgsController {
  constructor(private readonly msgsService: MsgsService) {}

  @Post()
  create(@Body() createMsgDto: CreateMsgDto) {
    return this.msgsService.create(createMsgDto);
  }

  @Get()
  findAll() {
    return this.msgsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.msgsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.msgsService.remove(+id);
  }
}
