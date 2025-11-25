import { Test, TestingModule } from '@nestjs/testing';
import { ConsultaVeterinariaController } from './consulta-veterinaria.controller';

describe('ConsultaVeterinariaController', () => {
  let controller: ConsultaVeterinariaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsultaVeterinariaController],
    }).compile();

    controller = module.get<ConsultaVeterinariaController>(ConsultaVeterinariaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
