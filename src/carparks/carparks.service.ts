import { Injectable } from '@nestjs/common';
import { CreateCarparkDto, UpdateCarparkDto } from "./dto";
import { Carpark } from "./entities/carpark.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class CarparksService {
  constructor(@InjectRepository(Carpark) private repository: Repository<Carpark>) {}


  create(createCarparkDto: CreateCarparkDto) {
    return this.repository.save(createCarparkDto);
  }

  findAll(): Promise<Carpark[]> {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateCarparkDto: UpdateCarparkDto) {
    return this.repository.update(id,updateCarparkDto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
