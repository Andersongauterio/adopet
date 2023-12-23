import { IsString, MinLength, MaxLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  readonly login: string;

  @IsString()
  @MinLength(4)
  readonly password: string;
}
