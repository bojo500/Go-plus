import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Carpark {

  @PrimaryGeneratedColumn()
  id: string;


  @Column({default: null})
  condition: string

}
