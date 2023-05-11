export class Experiencias {
    id?: number;
    inicio:string;
    fin:string;
    puesto:string;
    descripcion:string;

    constructor(inicio:string, fin:string, puesto:string, descripcion:string){
        this.inicio = inicio;
        this.fin = fin;
        this.puesto = puesto;
        this.descripcion = descripcion;
    }
}
