import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from '../ToDo.actions';
import { AppState } from 'src/app/app.reducer';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent {

  miFormulario:FormGroup = this.fb.group({
    nombre: ['',[Validators.required,]],
    accion: ['',[Validators.required]],
    responsable: ['',[Validators.required]],
    duracion: ['',[Validators.required]],
    estado: ['',[Validators.required]]
  })

  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router){
  }

  agregar(){
    if (!this.miFormulario.valid){ 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor complete todos los campos',
      })
      return
    }
  
    this.store.dispatch(actions.enviar( this.miFormulario.value))
    Swal.fire({
      title: 'Creado!',
      icon: 'success',
      confirmButtonText: 'continuar'
    })
    this.router.navigate(['/tarjetas']);
  }


}
