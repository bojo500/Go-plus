import { Test, TestingModule } from '@nestjs/testing';
import { CarparksController } from './carparks.controller';
import { CarparksService } from './carparks.service';

describe('CarparksController', () => {
  let controller: CarparksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarparksController],
      providers: [CarparksService],
    }).compile();

    controller = module.get<CarparksController>(CarparksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
