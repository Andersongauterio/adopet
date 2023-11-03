import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateAdoptionFormDto {
  @IsInt()
  @IsNotEmpty()
  pet_id: number;

  @IsInt()
  @IsNotEmpty()
  user_id: number;

  @IsInt()
  @IsNotEmpty()
  message_ID: number;
}