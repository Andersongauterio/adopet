import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateStateDto } from './dtos/createStateDto';
import { State } from './states.entity';

@Injectable()
export class StatesService {
  constructor(
    @InjectRepository(State)
    private stateRepository: Repository<State>
  ) { }

  async create(estateData: CreateStateDto): Promise<State> {
    const state = this.stateRepository.create(estateData);
    return await this.stateRepository.save(state);
  }

  async findOne(id: string): Promise<State> {
    const estate = await this.stateRepository.findOne({ id: id } as FindOneOptions<State>);

    if (!estate) {
      throw new NotFoundException('Estate not found');
    }

    return estate;
  }

  async findAll(): Promise<State[]> {
    return this.stateRepository.find();
  }
}
