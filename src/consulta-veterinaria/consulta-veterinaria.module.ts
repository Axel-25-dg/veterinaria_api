import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsultaVeterinariaService } from './consulta-veterinaria.service';
import { ConsultaVeterinariaController } from './consulta-veterinaria.controller';
import { ConsultaVeterinaria } from './consulta-veterinaria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConsultaVeterinaria])],
  controllers: [ConsultaVeterinariaController],
  providers: [ConsultaVeterinariaService],
})
export class ConsultaVeterinariaModule {}
