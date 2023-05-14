import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienciasService } from 'src/app/Servicios/experiencias.service';
import { Experiencias } from 'src/app/Entidades/experiencias';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit{
  experiencia : Experiencias []=[];
  form:FormGroup;
  expe:any;
  inicio: string='';
  fin: string='';
  puesto: string='';
  descripcion: string='';
  id:any;

  constructor(private formBuilder: FormBuilder, private expeServ:ExperienciasService) {
   this.form = this.formBuilder.group({
     inicio:['', [Validators.required]],
     fin:['', [Validators.required]],
     puesto:['', [Validators.required,]],
     descripcion:['', [Validators.required, Validators.minLength(50)]]
   })
  }

  agregar(){
    if (this.form.valid){
      this.expeServ.crear(this.expe).subscribe(data => {this.expe = data});
    }
    }


  ngOnInit(): void{}

  // Métodos de form
  get Inicio() {
    return this.form.get("inicio");
  }

  get Fin(){
    return this.form.get("fin");
  }
  
  get Puesto() {
    return this.form.get("puesto");
  }

  get Descripcion() {
    return this.form.get("descripcion");
  }

  // Métodos de validación
  get InicioInvalid() {
    return this.Inicio?.touched && !this.Inicio?.valid;
  }

  get FinInvalid() {
    return this.Fin?.touched && !this.Fin?.valid;
  }

  get PuestoInvalid() {
    return this.Puesto?.touched && !this.Puesto?.valid;
  }

  get DescripcionInvalid() {
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }

  limpiar(): void {
    this.form.reset();
  }

  onCrear():void{
    const experiencia = new Experiencias(this.id, this.puesto, this.inicio, this.fin, this.descripcion);
    this.expeServ.crear(experiencia).subscribe(data =>{alert("Experiencia creada correctamente")
    window.location.reload();})
  }

onEnviar(event: Event){

  event.preventDefault; 
    
  if (this.form.valid){
    this.onCrear();
   }else{
  // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
    alert("ups, algo falló. Intente nuevamente");
    this.form.markAllAsTouched(); 
  }
}

cargarExperiencia():void {
  this.expeServ.lista().subscribe(data => {this.expe = data})
}

eliminar(id?:number){
  (confirm("Esta seguro de que desea borrar el proyecto?"))
    if (id !=undefined){
      this.expeServ.borrar(id).subscribe(data =>{this.experiencia = data
      }, err => {
        alert("ups, algo salió mal.");
      })
};
}
   

/*eliminar(id?:number){
   if (id != undefined){
     (window.confirm('¿Estas seguro que deseas borrar esta experiencia?'))
      this.expeServ.borrarExperiencia(id).subscribe(data => {
        this.expeServ.lista();
      }, err => {
        alert("ups, algo salió mal.")
      })
    }
  }*/
}