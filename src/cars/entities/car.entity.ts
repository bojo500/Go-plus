import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Carpark } from "../../carparks/entities/carpark.entity";

@Entity()
export class Car {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  mark: string;

  @Column()
  color: string;

  @OneToMany(() => Carpark, carpark => carpark.car)
  @JoinTable()
  carparks: Carpark[];
}
