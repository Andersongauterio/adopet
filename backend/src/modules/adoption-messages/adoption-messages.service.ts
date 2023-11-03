import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMsgDto } from './dtos/createMsgDto';
import { Msg } from './msgs.entity';

@Injectable()
export class MsgsService {
  constructor(
    @InjectRepository(Msg)
    private readonly msgRepository: Repository<Msg>,
  ) {}

  async create(createMsgDto: CreateMsgDto): Promise<Msg> {
    const msg = this.msgRepository.create(createMsgDto);
    return await this.msgRepository.save(msg);
  }

  async findAll(): Promise<Msg[]> {
    return await this.msgRepository.find();
  }

  async findOne(id: number): Promise<Msg | undefined> {
    return await this.msgRepository.findOne({ id: id} as any);
  }

  async remove(id: number): Promise<void> {
    await this.msgRepository.delete(id);
  }
}