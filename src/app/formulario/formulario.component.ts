import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formu= {
    nombre: '',
    apellido: '',
    edad: '',
    email: '',
    password: ''
  }
  
  f: FormGroup

  constructor(private fb : FormBuilder) { 
    this.f = fb.group({
      nombre: ['', Validators.required],
      apellido: '',
      edad: '',
      contacto: fb.group({
      email: '',
      telefono:""  
      }),
      password: ''
    })
  }

  ngOnInit(): void {
  }
  enviar(obligatorio:any){
    let datos = {...this.formu}
    console.log(datos)
    // Resetea los campos y estados del formulario
    obligatorio.form.reset()
  }
  EnviarRF(){
    let datos = this.f.value;
    console.log(datos);
  }
}