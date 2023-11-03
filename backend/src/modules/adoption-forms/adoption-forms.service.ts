import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdoptionForm } from './adoptionForm.entity';
import { CreateAdoptionFormDto } from './dtos/createAdoptionFormDto';

@Injectable()
export class AdoptionFormsService {
  constructor(
    @InjectRepository(AdoptionForm)
    private readonly adoptionFormRepository: Repository<AdoptionForm>,
  ) {}

  async create(createAdoptionFormDto: CreateAdoptionFormDto): Promise<AdoptionForm> {
    const adoptionForm = new AdoptionForm();
    adoptionForm.pet_id = createAdoptionFormDto.pet_id;
    adoptionForm.user_id = createAdoptionFormDto.user_id;
    adoptionForm.message_ID 

    return this.adoptionFormRepository.save(adoptionForm);
  }

  async findAll(): Promise<AdoptionForm[]> {
    return await this.adoptionFormRepository.find();
  }

  async findOne(id: number): Promise<AdoptionForm | undefined> {
    return await this.adoptionFormRepository.findOne({ id: id } as any);
  }

  async remove(id: number): Promise<void> {
    await this.adoptionFormRepository.delete(id);
  }
}
