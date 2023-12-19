import { Controller, Get, Post, Body, Param, Delete, HttpStatus, HttpException } from '@nestjs/common';
import { CreateAdoptionFormDto } from './dtos/createAdoptionFormDto';
import { AdoptionForm } from './adoptionForm.entity';
import { AdoptionFormsService } from './adoption-forms.service';

@Controller('adoption-forms')
export class AdoptionFormsController {
  constructor(private readonly adoptionFormsService: AdoptionFormsService) { }

  @Post()
  async create(@Body() createAdoptionFormDto: CreateAdoptionFormDto): Promise<AdoptionForm> {
    try {
      return await this.adoptionFormsService.create(createAdoptionFormDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll(): Promise<AdoptionForm[]> {
    return await this.adoptionFormsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<AdoptionForm> {
    const adoptionForm = await this.adoptionFormsService.findOne(id);
    if (!adoptionForm) {
      throw new HttpException('Adoption Form not found', HttpStatus.NOT_FOUND);
    }
    return adoptionForm;
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.adoptionFormsService.findOne(id);
    return await this.adoptionFormsService.remove(id);
  }
}