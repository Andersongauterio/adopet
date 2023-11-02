import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './users.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
      ) {}
    
      async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
        return await this.userRepository.save(createUserDto);
      }

      async getAllUsers(): Promise<UserEntity[]> {
        return this.userRepository.find();
      }
    
      async findUserById(id: number): Promise<UserEntity | undefined> {
        return await this.userRepository.findOne({ id: id } as FindOneOptions<UserEntity>);
      }

      async updateUser(id: number, updateUserDto: CreateUserDto): Promise<UserEntity | undefined> {
        const user = await this.userRepository.findOne({ id: id } as FindOneOptions<UserEntity>);
        if (!user) {
          return undefined; 
        }
      
        user.name = updateUserDto.name;
        user.phone = updateUserDto.phone;
      
        return await this.userRepository.save(user);
      }

      async removeUser(id: number): Promise<void> {
        const user = await  this.userRepository.findOne({ id: id } as FindOneOptions<UserEntity>);
        if (user) {
          await this.userRepository.remove(user);
        }
      }
}
