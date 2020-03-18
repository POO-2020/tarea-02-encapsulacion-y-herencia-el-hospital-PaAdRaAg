import Paciente from "./paciente.js";
import Fecha from "./fecha.js";

export default class PacienteAsegurado extends Paciente{
    /**
     * 
     * @param {number} numeroPoliza 
     * @param {Fecha} finVigencia 
     * @param {string} compañia 
     */
    constructor({nombre, fecha, telefono, numeroPoliza, finVigencia, compañia}){
        super({nombre, fecha, telefono});
        this._nombre = nombre;
        this._fecha = fecha;
        this._telefono = telefono;
        this._numeroPoliza = numeroPoliza;
        this._finVigencia = finVigencia;
        this._compañia = compañia;
    }

    getPerfil(){
        return (`${this._nombre.getNombreCompleto()}, ${this._fecha.getFecha()}, ${this._telefono}, ${this._numeroPoliza}, ${this._finVigencia.getFecha()}, ${this._compañia}`)
    }
}