import Nombre from "./nombre.js";

export default class Doctor{
    /**
     * 
     * @param {Nombre} nombre 
     * @param {string} especialidad 
     * @param {number} telefono 
     * @param {number} cedula 
     */
    constructor(nombre, especialidad, telefono, cedula){
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.telefono = telefono;
        this.cedula = cedula;
    }
    getPerfil() {
        return (`${this.nombre.getNombreCompleto()}, ${this.especialidad}, ${this.telefono}, ${this.cedula}`);
      }
    }