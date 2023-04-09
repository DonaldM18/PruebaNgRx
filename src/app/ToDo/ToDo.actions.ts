import { createAction, props } from "@ngrx/store";


export const enviar = createAction('[ADMINISTRADOR] Enviar informacion',
props<{nombre: string, accion: string, responsable: string, duracion: string, estado: string }>()
);

export const eliminar = createAction('[ADMINISTRADOR] Eliminar informacion',
props<{id:number}>()
);

export const editar = createAction('[ADMINISTRADOR] Editar informacion',
props<{id:number, nombre: string, accion: string, responsable: string, duracion: string, estado: string }>()
);

