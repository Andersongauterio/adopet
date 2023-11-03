import { IsString, IsUrl } from 'class-validator';

export class CreatePetImgsDto {
  @IsString()
  alt: string;

  @IsUrl()
  imgUrl: string;
}