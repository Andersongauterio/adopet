import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber()
  phone: number;

  @IsNotEmpty()
  @IsString()
  password: string;
}