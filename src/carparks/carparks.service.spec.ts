import { Test, TestingModule } from '@nestjs/testing';
import { CarparksService } from './carparks.service';

describe('CarparksService', () => {
  let service: CarparksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarparksService],
    }).compile();

    service = module.get<CarparksService>(CarparksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
