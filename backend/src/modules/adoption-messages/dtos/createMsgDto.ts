import { IsInt, IsString } from 'class-validator';

export class CreateMsgDto {
  @IsInt()
  recUserId: number;

  @IsInt()
  senderUserId: number;

  @IsString()
  msg: string;
}
