import { IsDate, IsNumber, IsString } from 'class-validator';

export class UpdateConsultaVeterinariaDto {
    @IsString()
    nombreMascota: string;

    @IsString()
    edad: number;

    @IsString()
    nombreDueno: string;

    @IsNumber()
    telefonoContacto: number;

    @IsDate()
    fechaConsulta: Date;

    @IsString()
    motivoConsulta: string;

    @IsString()
    estado: string;
}