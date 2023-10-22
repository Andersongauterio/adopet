import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetDTO } from './dtos/createPet.dto';
import { PetEntity } from './interfaces/pets.entity';

@Injectable()
export class PetsService {

  constructor(
    @InjectRepository(PetEntity)
    private readonly petRepository: Repository<PetEntity>
  ) { };

  async createPet(createPetDTO: CreatePetDTO): Promise<PetEntity> {
    return this.petRepository.save({
      ...createPetDTO
    });
  }

  async getAllPets(): Promise<PetEntity[]> {
    return this.petRepository.find();
  }

}
