import { IsNotEmpty } from "class-validator";

export class CreateCarparkDto {

  @IsNotEmpty()
  condition: string
}
