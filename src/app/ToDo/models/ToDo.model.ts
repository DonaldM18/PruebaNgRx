

export class ToDo{
    public id: number;
    public nombre: string;
    public accion: string;
    public responsable: string;
    public duracion: string;
    public estado: string;


    constructor(nombre: string, accion: string, responsable: string, duracion: string, estado: string ){
        this.id = Math.random();
        this.nombre = nombre;
        this.accion = accion;
        this.responsable = responsable;
        this.duracion = duracion;
        this.estado = estado;

    }
    
}