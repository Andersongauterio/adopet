import { IsString, IsUrl } from 'class-validator';

export class UpdatePetImgsDto {
  @IsString()
  alt: string;

  @IsUrl()
  imgurl: string;

}