import { Injectable } from '@nestjs/common';
import { CreatePetDTO } from './dtos/createPet.dto';
import { Pet } from './interfaces/pets.interface';

@Injectable()
export class PetsService {

private pets: Pet[] = [];

  async createPet(createPetDTO: CreatePetDTO): Promise<Pet> {
    return {
      ...createPetDTO,
      id: 1
    };
  }
}
