import { Injectable } from '@nestjs/common';
import { CreateCarDto, UpdateCarDto } from "./dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Car } from "./entities/car.entity";

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private repository: Repository<Car>) {}


  create(createCarDto: CreateCarDto) {
    return this.repository.save(createCarDto);
  }

  findAll() : Promise<Car[]>{
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return this.repository.update(id,updateCarDto);
  }

  remove(id: number) {
    return this.repository.delete(+id);
  }
}
