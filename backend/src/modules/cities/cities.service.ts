import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Cities } from './cities.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(Cities)
    private readonly cityRepository: Repository<Cities>,
  ) {}

  async create(cityData: Partial<Cities>): Promise<Cities> {
    const city = this.cityRepository.create(cityData);
    return await this.cityRepository.save(city);
  }

  async findAll(): Promise<Cities[]> {
    return this.cityRepository.find();
  }

  async findOne(id: number): Promise<Cities> {
    const city = await this.cityRepository.findOne({ id: id } as FindOneOptions<Cities>);

    if (!city) {
      throw new NotFoundException('City not found');
    }

    return city;
  }
}
