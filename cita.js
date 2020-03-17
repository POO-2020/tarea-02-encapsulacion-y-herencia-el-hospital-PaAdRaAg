import Paciente from "./paciente.js";
import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Doctor from "./doctor.js";
import Nombre from "./nombre.js";

export default class Cita {
  /**
   *
   * @param {Fecha} fecha
   * @param {Tiempo} hora
   * @param {Doctor} doctor
   * @param {Paciente} paciente
   */

  constructor(fecha, hora, doctor, paciente) {
    this.fecha = fecha;
    this.hora = hora;
    this.doctor = doctor;
    this.paciente = paciente;
  }

  getPerfil() {
    return `${this.fecha.getFecha()}, ${this.hora.getFormato24()}, ${"Dr. " + this.doctor.getPerfil()}, ${this.paciente.nombre.getNombreCompleto()}`;
  }
}