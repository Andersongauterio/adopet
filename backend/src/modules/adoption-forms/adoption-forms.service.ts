import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from '../pets/pets.entity';
import { User } from '../users/users.entity';
import { AdoptionForm } from './adoptionForm.entity';
import { CreateAdoptionFormDto } from './dtos/createAdoptionFormDto';

@Injectable()
export class AdoptionFormsService {
  constructor(
    @InjectRepository(AdoptionForm)
    private readonly adoptionFormRepository: Repository<AdoptionForm>,
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createAdoptionFormDto: CreateAdoptionFormDto): Promise<AdoptionForm> {
    const adoptionForm = new AdoptionForm();
    
    const pet = await this.petRepository.findOne({ where: { id: createAdoptionFormDto.pet_id } });
    const user = await this.userRepository.findOne({ where: { id: createAdoptionFormDto.user_id } });

    if (!pet || !user) {
      throw new Error('Pet or User not found');
    }

    adoptionForm.pet = pet;
    adoptionForm.user = user;
    adoptionForm.name = createAdoptionFormDto.name;
    adoptionForm.email = createAdoptionFormDto.email;
    adoptionForm.phone = createAdoptionFormDto.phone;

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
