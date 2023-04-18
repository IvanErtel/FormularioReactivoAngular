import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      nombre: '',
      apellido: '',
      edad: '',
      email: '',
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

}