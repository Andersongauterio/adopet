import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dtos/createPet.dto';
import { PetEntity } from './pets.entity';

@Injectable()
export class PetsService {

  constructor(
    @InjectRepository(PetEntity)
    private readonly petRepository: Repository<PetEntity>
  ) { };

  async createPet(createPetDTO: CreatePetDto): Promise<PetEntity> {
    return this.petRepository.save({
      ...createPetDTO
    });
  }

  async getAllPets(): Promise<PetEntity[]> {
    return this.petRepository.find();
  }

}
