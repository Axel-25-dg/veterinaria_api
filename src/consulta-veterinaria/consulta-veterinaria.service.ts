import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConsultaVeterinaria } from './consulta-veterinaria.entity';
import { CreateConsultaVeterinariaDto } from './dto/create-consulta-veterinaria.dto';
import { UpdateConsultaVeterinariaDto } from './dto/update-consulta-veterinaria.dto';

@Injectable()
export class ConsultaVeterinariaService {
    constructor(
        @InjectRepository(ConsultaVeterinaria)
        private readonly ConsultaVeterinariaRepository: Repository<ConsultaVeterinaria>,
    ) { }

    create(createConsultaveterinariaDto: CreateConsultaVeterinariaDto) {
        const consultaveterinaria = this.ConsultaVeterinariaRepository.create({
            ...createConsultaveterinariaDto,
            edad: String(createConsultaveterinariaDto.edad),
            telefonoContacto: String(createConsultaveterinariaDto.telefonoContacto),
            fechaConsulta: createConsultaveterinariaDto.fechaConsulta.toString(),
            costoConsulta: String(createConsultaveterinariaDto.costoConsulta),
        });
        return this.ConsultaVeterinariaRepository.save(consultaveterinaria);
    }

    findAll() {
        return this.ConsultaVeterinariaRepository.find();
    }   

    findOne(id: string) {
        return this.ConsultaVeterinariaRepository.findOne({ where: { id } });
    }

    async update(id: string, updateConsultaveterinariaDto: UpdateConsultaVeterinariaDto) {
        const consultaveterinaria = await this.ConsultaVeterinariaRepository.findOne({ where: { id } });
        if (!consultaveterinaria) return null;
        Object.assign(consultaveterinaria, updateConsultaveterinariaDto);
        return this.ConsultaVeterinariaRepository.save(consultaveterinaria);
    }

    async remove(id: string) {
        const consultaveterinaria = await this.ConsultaVeterinariaRepository.findOne({ where: { id } });
        if (!consultaveterinaria) return null;
        return this.ConsultaVeterinariaRepository.remove(consultaveterinaria);
    }
}
