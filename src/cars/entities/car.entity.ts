import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  mark: string;

  @Column()
  color: string;
}
