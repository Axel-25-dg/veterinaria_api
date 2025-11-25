import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('consulta-veterinaria')
export class ConsultaVeterinaria {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    nombreMascota: string;

    @Column()
    especie: string;

    @Column()
    edad: string;

    @Column()
    nombreDueno: string;

    @Column()
    telefonoContacto: string;

    @Column()
    fechaConsulta: string;

    @Column()
    motivoConsulta: string;

    @Column()
    costoConsulta: string;

    @Column()
    estado: string;
}