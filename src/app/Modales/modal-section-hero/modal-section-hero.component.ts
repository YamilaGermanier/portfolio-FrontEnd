import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/Entidades/persona-entity';
import { PersonaService } from 'src/app/Servicios/persona.service';

@Component({
  selector: 'app-modal-section-hero',
  templateUrl: './modal-section-hero.component.html',
  styleUrls: ['./modal-section-hero.component.css']
})
export class ModalSectionHeroComponent implements OnInit{
  
  form:FormGroup;
  imagenPerfil: String=' ' ;
  mensaje: String='';
  nombre:String='';
  apellido:String='';
  titulo:String='';
  ubicacion:String='';

  constructor(private formBuilder: FormBuilder, private persoServ:PersonaService) {
    this.form = this.formBuilder.group({
      imagenPerfil:['', [Validators.required]],
      mensaje:['', [Validators.required]],
      nombre:['', [Validators.required]],
      apellido:['', [Validators.required]],
      titulo:['', [Validators.required]],
      ubicacion:['', [Validators.required]],
    })
   }
   
   ngOnInit(): void{}

  //Métodos de entrada
  get Foto(){
    return this.form.get("imagenPerfil");
  }

  get Nombre(){
    return this.form.get("nombre");
  }

  get Titulo(){
    return this.form.get("titulo");
  }

  get Ubicacion(){
    return this.form.get("ubicacion"); 
  }
  
  // Métodos para validar

  get FotoInvalid(){
    return this.Foto?.touched && !this.Foto.valid; 
  }

  get NombreInvalid(){
    return this.Nombre?.touched && !this.Nombre.valid; 
  }

  get TituloInvalid(){
    return this.Titulo?.touched && !this.Titulo.valid; 
  }

  get UbicacionInvalid(){
    return this.Ubicacion?.touched && !this.Ubicacion.valid; 
  }

  onEditar():void {
    const persona = new Persona(this.nombre, this.apellido, this.mensaje, this.titulo, this.ubicacion, this.imagenPerfil);
    this.persoServ.editar(persona).subscribe(data=>{alert("Los datos se guardaron correctamente!"); window.location.reload();
  }, err => {alert("Algo falló en la carga, por favor vuelva a intentarlo"); window.location.reload()});
  }

  limpiar(): void {
    this.form.reset();
  }

   onEnviar(event: Event){
    event.preventDefault; 
    if (this.form.valid){
      this.onEditar();
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!");
    }else{
      alert("Algo falló en la carga, por favor vuelva a intentarlo.");
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
   }
}
