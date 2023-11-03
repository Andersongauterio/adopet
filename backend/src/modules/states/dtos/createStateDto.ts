import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateStateDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 2)
  uf: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}