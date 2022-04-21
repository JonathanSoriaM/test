import { Test, TestingModule } from '@nestjs/testing';
import { FraseService } from './frase.service';

describe('FraseService', () => {
  let service: FraseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FraseService],
    }).compile();

    service = module.get<FraseService>(FraseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
