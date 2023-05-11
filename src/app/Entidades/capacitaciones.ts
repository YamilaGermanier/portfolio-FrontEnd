export class Capacitaciones {
    id?: number;
    fechaExpedicion:string;
    nombreCap:string;
    institucionCap:string;

    constructor(fechaExpedicion:string, nombreCap:string, institucionCap:string){
        this.fechaExpedicion = fechaExpedicion;
        this.nombreCap = nombreCap;
        this.institucionCap = institucionCap;
    }
}
