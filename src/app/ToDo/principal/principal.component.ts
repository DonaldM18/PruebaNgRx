import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ToDo } from '../models/ToDo.model';
import * as actions from '../ToDo.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  tareas: ToDo[] = [];
  editar:boolean = true;
  tareaEdicion!: number;

  miFormulario1:FormGroup = this.fb.group({
    nombre: ['',Validators.required],
    accion: ['',Validators.required],
    responsable: ['',Validators.required],
    duracion: ['',Validators.required],
    estado: ['',Validators.required]
  })

  constructor(private fb: FormBuilder, private store: Store<AppState>){ }

  ngOnInit(): void {
    this.store.select('todo')
    .subscribe((tareas) => 
        this.tareas = tareas
      );
  }

  eliminar(id:number){
    this.store.dispatch(actions.eliminar({id}) )
    Swal.fire({
      title: 'Eliminado!',
      icon: 'warning',
      confirmButtonText: 'continuar'
    })
  }

  editando(id:number){
    this.editar= false;
    this.tareaEdicion = id;
  }

  guardarCambios(id:number){
    this.store.dispatch(actions.editar({id, ...this.miFormulario1.value}))
    this.editar= true;
    Swal.fire({
      title: 'Editado!',
      icon: 'success',
      confirmButtonText: 'continuar'
    })
  }

}
