import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateAdoptionFormDto {
  @IsInt()
  @IsNotEmpty()
  pet_id: number;

  @IsInt()
  @IsNotEmpty()
  user_id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  message: string;

}