export class Proyectos {
    id?: number;
    imagen: string;
    nombreProyecto:string;
    urlProyecto:string;

    constructor(imagen:string, nombreProyecto:string, urlProyecto:string) {
        this.imagen = imagen;
        this.nombreProyecto = nombreProyecto;
        this.urlProyecto = urlProyecto;
    }
}
