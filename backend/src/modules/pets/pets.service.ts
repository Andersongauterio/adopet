import { Cities } from './../cities/cities.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/users.entity';
import { CreatePetDto } from './dtos/createPet.dto';
import { Pet } from './pets.entity';

@Injectable()
export class PetsService {

  constructor(
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,

    @InjectRepository(Cities)
    private readonly cityRepository: Repository<Cities>
  ) { };

  async createPet(createPetDto: CreatePetDto, user: User): Promise<Pet> {
    const pet = new Pet();
    Object.assign(pet, createPetDto);
    pet.user = user;
    if (createPetDto.city_id) {
      const city = await this.cityRepository.findOne({
        where: { id: createPetDto.city_id }
      });
      if (city) {
        pet.city = city;
      }
    }
    return this.petRepository.save(pet);
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

  async getPetsByUserId(userId: number): Promise<Pet[]> {
    return this.petRepository.find({
      where: { user: { id: userId } }
    });
  }

}
