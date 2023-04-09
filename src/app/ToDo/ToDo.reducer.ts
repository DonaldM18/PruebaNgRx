import { createReducer, on } from "@ngrx/store";
import { editar, eliminar, enviar } from "./ToDo.actions";
import { ToDo } from "./models/ToDo.model";


export const estadoInicial: ToDo[] = [];

const _todoReducer = createReducer(estadoInicial,
    on( enviar, (state, {nombre, accion, responsable, duracion, estado }) => [...state, new ToDo(nombre, accion, responsable, duracion, estado) ] ),
    on( eliminar, ( state, { id } ) =>  state.filter( tarea => tarea.id !== id ) ),
    on( editar, (state, { id, nombre, accion, responsable, duracion, estado }) => {
    
        return state.map( tarea => {
    
          if ( tarea.id === id  ) {
            return {
              ...tarea,
              nombre,
              accion,
              responsable,
              duracion,
              estado
            }
          } else {
            return tarea;
          }
    
        });
      }),
    );
    
    

export function todoReducer(state:any, action:any){
    return _todoReducer(state, action);
}