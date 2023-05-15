export class Titulos {
    id?: number;
    logoInstitucion: string;
    nombre: string;
    institucion: string;
    fechaEgreso: string;

    constructor(logoInstitucion: string, nombre:string, institucion:string, fechaEgreso:string){
        this.logoInstitucion = logoInstitucion;
        this.nombre = nombre;
        this.institucion = institucion;
        this.fechaEgreso = fechaEgreso;
    }
}
