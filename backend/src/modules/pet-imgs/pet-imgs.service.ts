import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetImgsDto } from './dtos/createPetImageDto';
import { UpdatePetImgsDto } from './dtos/updatePetImageDto';
import { PetImgs } from './petImgs.entity';

@Injectable()
export class PetImgsService {
  constructor(
    @InjectRepository(PetImgs)
    private readonly petImgsRepository: Repository<PetImgs>,
  ) { }

  async create(createPetImgsDto: CreatePetImgsDto): Promise<PetImgs> {
    const petImgs = this.petImgsRepository.create(createPetImgsDto);
    return await this.petImgsRepository.save(petImgs);
  }

  async findAll(): Promise<PetImgs[]> {
    return await this.petImgsRepository.find();
  }

  async findOne(id: number): Promise<PetImgs> {
    const petImg = await this.petImgsRepository.findOne({ where: { id } });
    if (!petImg) {
      throw new Error('Imagem não encontrada');
    }
    return petImg;
  }

  async remove(id: number): Promise<void> {
    await this.petImgsRepository.delete(id);
  }

  async findImgsByPetId(petId: number): Promise<PetImgs[]> {
    return this.petImgsRepository.find({
      where: {
        pet: { id: petId }
      }
    });
  }

  async update(id: number, updatePetImgDto: UpdatePetImgsDto): Promise<PetImgs> {
    const petImg = await this.petImgsRepository.findOne({ where: { id } });
    if (!petImg) {
      throw new Error('Imagem não encontrada');
    }
    Object.assign(petImg, updatePetImgDto);
    return this.petImgsRepository.save(petImg);
  }

}
