import { IsNotEmpty, IsString } from "class-validator";

export class CreateCarDto {

  @IsNotEmpty()
  @IsString()
  mark: string;

  @IsNotEmpty()
  @IsString()
  color: string;

}
