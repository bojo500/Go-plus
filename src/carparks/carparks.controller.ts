import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarparksService } from './carparks.service';
import { CreateCarparkDto, UpdateCarparkDto } from "./dto";
import { Condition } from "./enum";
import { Conditions } from "../shared/decorators/condition.decorator";
import { Carpark } from "./entities/carpark.entity";

@Controller('carparks')
export class CarparksController {
  constructor(private readonly carparksService: CarparksService) {}

  @Post()
  @Conditions(Condition.EMPTY, Condition.USED, Condition.RESERVED, Condition.OWNED)
  create(@Body() createCarparkDto: CreateCarparkDto) {
    return this.carparksService.create(createCarparkDto);
  }

  @Get()
  findAll(): Promise<Carpark[]> {
    return this.carparksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Carpark> {
    return this.carparksService.findOne(+id);
  }

  @Patch(':id')
  @Conditions(Condition.EMPTY, Condition.USED, Condition.RESERVED, Condition.OWNED)
  update(@Param('id') id: string, @Body() updateCarparkDto: UpdateCarparkDto) {
    return this.carparksService.update(+id, updateCarparkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carparksService.remove(+id);
  }
}
