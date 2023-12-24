import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @IsString()
  login: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  email: string;
}