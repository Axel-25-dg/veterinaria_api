import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateConsultaVeterinariaDto {
    @IsString()
    nombreMascota: string;

    @IsString()
    especie: string;

    @IsNumber()
    edad: number;

    @IsString()
    nombreDueno: string;

    @IsNumber()
    telefonoContacto: number;

    @IsDate()
    fechaConsulta: string;

    @IsString()
    motivoConsulta: string;

    @IsNumber()
    costoConsulta: number;

    @IsString()
    estado: string;
}