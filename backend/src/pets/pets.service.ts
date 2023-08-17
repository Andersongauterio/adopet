import { Injectable } from '@nestjs/common';
import { CreatePetDTO } from './dtos/createPet.dto';
import { Pet } from './interfaces/pets.interface';

@Injectable()
export class PetsService {
  private pets: Pet[] = [];

  async createPet(createPetDTO: CreatePetDTO): Promise<Pet> {
    const pet: Pet = {
      ...createPetDTO,
      id: this.pets.length + 1,
    };

    this.pets.push(pet);

    return pet;
  }

  async getAllPets(): Promise<Pet[]> {
      return this.pets;
  }

}
