import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formu = {
    nombre: '',
    apellido: '',
    edad: '',
    email: '',
    password: ''
  }

  f: FormGroup
  cantMinCar: number = 3;
  cantMaxCar: number = 12
  constructor(private fb: FormBuilder) {
    this.f = fb.group({
      nombre: ['', Validators.compose([
        Validators.required,
        Validators.minLength(this.cantMinCar),
        Validators.maxLength(this.cantMaxCar)
      ])],
      apellido: '',
      edad: '',
      contacto: fb.group({
        email: '',
        telefono: ""
      }),
      password: ''
    })
  }

  ngOnInit(): void {
  }
  enviar(obligatorio: any) {
    let datos = { ...this.formu }
    console.log(datos)
    // Resetea los campos y estados del formulario
    obligatorio.form.reset()
  }
  EnviarRF() {
    let datos = this.f.value;
    console.log(datos);
  }
}