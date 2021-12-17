import { PartialType } from '@nestjs/swagger';
import { CreateCarparkDto } from './create-carpark.dto';

export class UpdateCarparkDto extends PartialType(CreateCarparkDto) {}
