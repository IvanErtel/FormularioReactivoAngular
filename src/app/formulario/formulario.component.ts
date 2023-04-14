import { Component, OnInit } from '@angular/core';

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
    mail: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }
  enviar(obligatorio:any){
    let datos = {...this.formu}
    console.log(datos)
    // Resetea los campos y estados del formulario
    obligatorio.form.reset()
  }

}