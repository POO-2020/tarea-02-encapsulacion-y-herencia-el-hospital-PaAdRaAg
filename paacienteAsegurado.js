import Paciente from "./paciente.js";
import Fecha from "./fecha.js";

export default class PacienteAsegurado extends Paciente{
    /**
     * 
     * @param {number} numeroPoliza 
     * @param {Fecha} finVigencia 
     * @param {string} compañia 
     */
    constructor({numeroPoliza, finVigencia, compañia}){
        super(nombre, fechaNacimiento, telefono)
        this._nombre = nombre;
        this._fechaNacimiento = fechaNacimiento;
        this._telefono = telefono;
        this._numeroPoliza = numeroPoliza;
        this._finVigencia = finVigencia;
        this._compañia = compañia;
    }

    getPerfil(){
        return (`${this._nombre}, ${this._fechaNacimiento}, ${this._telefono}, ${this._numeroPoliza}, ${this._finVigencia}, ${this._compañia}`)
    }
}