import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "../../cars/entities/car.entity";

@Entity()
export class Carpark {

  @PrimaryGeneratedColumn()
  id: string;


  @Column({default: null})
  condition: string;

  @ManyToOne(() => Car, car => car.carparks)
  car: Car;


}
