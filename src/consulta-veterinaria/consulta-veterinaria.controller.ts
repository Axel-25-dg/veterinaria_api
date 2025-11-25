import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsultaVeterinariaService } from './consulta-veterinaria.service';
import { CreateConsultaVeterinariaDto } from './dto/create-consulta-veterinaria.dto';
import { UpdateConsultaVeterinariaDto } from './dto/update-consulta-veterinaria.dto';

@Controller('consulta-veterinaria')
export class ConsultaVeterinariaController {
    constructor(private readonly consultaVeterinariaService: ConsultaVeterinariaService) { }

    @Post()
    create(@Body() createConsultaVeterinariaDto: CreateConsultaVeterinariaDto) {
        return this.consultaVeterinariaService.create(createConsultaVeterinariaDto);
    }

    @Get()
    findAll() {
        return this.consultaVeterinariaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.consultaVeterinariaService.findOne(String(id));
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateConsultaVeterinariaDto: UpdateConsultaVeterinariaDto) {
        return this.consultaVeterinariaService.update(String(id), updateConsultaVeterinariaDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.consultaVeterinariaService.remove(String(id));
    }
}