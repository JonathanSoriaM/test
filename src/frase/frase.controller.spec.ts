import { Test, TestingModule } from '@nestjs/testing';
import { FraseController } from './frase.controller';

describe('FraseController', () => {
  let controller: FraseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FraseController],
    }).compile();

    controller = module.get<FraseController>(FraseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
