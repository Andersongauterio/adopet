import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dtos/createPet.dto';
import { Pet } from './pets.entity';

@Injectable()
export class PetsService {

  constructor(
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>
  ) { };

  async createPet(createPetDTO: CreatePetDto): Promise<Pet> {
    return this.petRepository.save({
      ...createPetDTO
    });
  }

  async getAllPets({ page, limit }): Promise<Pet[]> {
    return this.petRepository.find({
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async getPetById(id: number): Promise<Pet> {
    const pet = await this.petRepository.findOne({ where: { id } });
    if (!pet) {
      throw new NotFoundException(`Pet with ID ${id} not found`);
    }
    return pet;
  }

}
