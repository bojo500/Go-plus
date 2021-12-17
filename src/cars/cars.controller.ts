import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from "./dto";
import { Car } from "./entities/car.entity";
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "../shared/decorators";
import { Role } from "../users/enum";

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  @Roles(Role.ADMIN, Role.SUPERVISOR)
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsService.create(createCarDto);
  }

  @Get()
  @Roles(Role.ADMIN, Role.SUPERVISOR)
  findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.SUPERVISOR, Role.RENTER, Role.RESIDENT)
  findOne(@Param('id') id: string) {
    return this.carsService.findOne(+id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN, Role.SUPERVISOR)
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carsService.update(+id, updateCarDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN, Role.SUPERVISOR)
  remove(@Param('id') id: string) {
    return this.carsService.remove(+id);
  }
}
