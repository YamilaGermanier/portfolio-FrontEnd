export class Experiencias {
    id?: number;
    inicio:string;
    fin:string;
    puesto:string;
    descripcion:string;

    constructor(id:number,inicio:string, fin:string, puesto:string, descripcion:string){
        this.id=id;
        this.inicio = inicio;
        this.fin = fin;
        this.puesto = puesto;
        this.descripcion = descripcion;
    }
}
