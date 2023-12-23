import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
      ) {}
    
      async createUser(createUserDto: CreateUserDto): Promise<User> {
        return await this.userRepository.save(createUserDto);
      }

      async getAllUsers(): Promise<User[]> {
        return this.userRepository.find();
      }
    
      async findUserById(id: number): Promise<User | undefined> {
        return await this.userRepository.findOne({ id: id } as FindOneOptions<User>);
      }

      async findByLogin(login: string): Promise<User | undefined> {
        try {
          return await this.userRepository.findOne({ where: { login } });
        } catch (error) {
          throw error;
        }
      }

      async updateUser(id: number, updateUserDto: CreateUserDto): Promise<User | undefined> {
        const user = await this.userRepository.findOne({ id: id } as FindOneOptions<User>);
        if (!user) {
          return undefined; 
        }
      
        user.name = updateUserDto.name;
        user.phone = updateUserDto.phone;
      
        return await this.userRepository.save(user);
      }

      async removeUser(id: number): Promise<void> {
        const user = await  this.userRepository.findOne({ id: id } as FindOneOptions<User>);
        if (user) {
          await this.userRepository.remove(user);
        }
      }
}
