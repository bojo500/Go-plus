import { Module } from '@nestjs/common';
import { CarparksService } from './carparks.service';
import { CarparksController } from './carparks.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Carpark } from "./entities/carpark.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Carpark]),
  ],
  controllers: [CarparksController],
  providers: [CarparksService]
})
export class CarparksModule {}
