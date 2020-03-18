import Cita from "./cita.js";
import Doctor from "./doctor.js";
import Fecha from "./fecha.js";
import Hospital from "./hospital.js";
import Nombre from "./nombre.js";
import Paciente from "./paciente.js";
import Tiempo from "./tiempo.js";
import PacienteAsegurado from "./pacienteAsegurado.js";
import FechaNacimiento from "../04-encapsulacion/fecha-nacimiento.js";

class Main {
  constructor() {
    this.hospital = new Hospital("Hospital", "De los enfermos");
  }

  testPacienteAsegurado(){
    let pacienteAseg = new PacienteAsegurado({
      nombre: new Nombre("Yolanda", "Solorio", "Reyes"),
      fecha: new Fecha(29, 2, 2019),
      telefono: 3123125648,
      numeroPoliza: 20187568,
      finVigencia: new Fecha(9, 7, 2021),
      compañia: "Casrx."
    });
    console.log(pacienteAseg.getPerfil());
  }

  agregarDoctor() {
    let doctor1 = new Doctor(new Nombre("Ernesto", "Pérez", "Rodríguez"),"Oftalmología",3135649512,98653212);
    let doctor2 = new Doctor(new Nombre("Pedro", "Ramírez", "Juárez"),"Dermatología",3123154898,56258456);
    let doctor3 = new Doctor(new Nombre("José", "Dominguez", "Figueroa"),"Urología",3123566868,63124556);

    this.hospital.registrarDoctor(doctor1);
    this.hospital.registrarDoctor(doctor2);
    this.hospital.registrarDoctor(doctor3);
    this.hospital.listarDoctores();
  }

  agregarCita() {
    let cita1 = new Cita(
      new Fecha(5, 4, 2020),
      new Tiempo(5, 40, "PM"),
      new Doctor(new Nombre("Pedro", "Ramírez", "Juárez"),"Dermatología",3123154898,56258456),
      new Paciente(new Nombre("Juan", "Solorio", "Mendoza"),new Fecha(5, 6, 2000),3124567855));
    this.hospital.registrarCita(cita1);
    this.hospital.listarCitas();
  }
}

let app = new Main();
/*app.agregarDoctor();
app.agregarCita();*/
app.testPacienteAsegurado();