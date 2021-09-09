export class Todo {

    constructor(tarea) {
        this.tarea = tarea;

        this.id = new Date().getTime(); // 112213121231
        this.completado = false;
        this.creado = new Date();
    }

}