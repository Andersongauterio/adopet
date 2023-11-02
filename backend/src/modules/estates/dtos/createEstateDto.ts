import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateEstateDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 2)
  uf: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}