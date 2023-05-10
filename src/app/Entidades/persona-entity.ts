export class Persona {
    id?: number;
    nombre: String;
    apellido: String;
    mensaje: String;
    titulo: String;
    ubicacion: String;
    imagenPerfil: String;

    constructor(nombre:String, apellido:String,mensaje:String, titulo:String,ubicacion:String,imagenPerfil:String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mensaje = mensaje;
        this.titulo = titulo;
        this.ubicacion = ubicacion;
        this.imagenPerfil = imagenPerfil;
    }

}
