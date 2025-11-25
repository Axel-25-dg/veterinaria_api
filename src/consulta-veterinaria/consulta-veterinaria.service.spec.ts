import { Test, TestingModule } from '@nestjs/testing';
import { ConsultaVeterinariaService } from './consulta-veterinaria.service';

describe('ConsultaVeterinariaService', () => {
  let service: ConsultaVeterinariaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultaVeterinariaService],
    }).compile();

    service = module.get<ConsultaVeterinariaService>(ConsultaVeterinariaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
