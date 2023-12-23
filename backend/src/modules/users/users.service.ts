import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async createUser(createUserDto: CreateUserDto): Promise<User> {

    const existingUser = await this.userRepository.findOne({ 
      where: { login: createUserDto.login } 
    });

    if (existingUser) {
      throw new ConflictException('Login já está em uso.');
    }

    const user = new User();
    user.login = createUserDto.login;
    user.name = createUserDto.name;
    user.phone = createUserDto.phone;
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(createUserDto.password, salt);
    return await this.userRepository.save(user);
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

    if (updateUserDto.password) {
      const salt = await bcrypt.genSalt();
      user.password = await bcrypt.hash(updateUserDto.password, salt);
    }

    return await this.userRepository.save(user);
  }

  async removeUser(id: number): Promise<void> {
    const user = await this.userRepository.findOne({ id: id } as FindOneOptions<User>);
    if (user) {
      await this.userRepository.remove(user);
    }
  }
}
