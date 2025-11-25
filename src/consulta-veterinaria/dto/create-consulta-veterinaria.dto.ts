import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateConsultaVeterinariaDto {
    @IsString()
    nombreMascota: string;

    @IsNumber()
    edad: number;

    @IsString()
    nombreDueno: string;

    @IsNumber()
    telefonoContacto: number;

    @IsDate()
    fechaConsulta: Date;

    @IsString()
    motivoConsulta: string;

    @IsNumber()
    costoConsulta: number;

    @IsString()
    estado: string;
}