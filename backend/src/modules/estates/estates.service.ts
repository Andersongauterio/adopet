import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateEstateDto } from './dtos/createEstateDto';
import { Estate } from './estates.entity';

@Injectable()
export class EstatesService {
  constructor(
    @InjectRepository(Estate)
    private estateRepository: Repository<Estate>
  ) { }

  async create(estateData: CreateEstateDto): Promise<Estate> {
    const estate = this.estateRepository.create(estateData);
    return await this.estateRepository.save(estate);
  }

  async findOne(id: string): Promise<Estate> {
    const estate = await this.estateRepository.findOne({ id: id } as FindOneOptions<Estate>);

    if (!estate) {
      throw new NotFoundException('Estate not found');
    }

    return estate;
  }

  async findAll(): Promise<Estate[]> {
    return this.estateRepository.find();
  }
}
