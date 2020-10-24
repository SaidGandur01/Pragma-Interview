import { Component } from '@angular/core';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {
  bandera: boolean = false;
  arrayNames = [];
  arrayDates = [];
  names: string = "";
  dates: string = "";
  items = [];
  constructor() { }

  generateList() {
    this.items = [];
    this.arrayNames = this.names.split("\n");
    this.arrayDates = this.dates.split("\n");
    console.log("Array nombres: ", this.arrayNames);
    console.log("Array Fechas: ", this.arrayDates);

    if (this.arrayDates.length != this.arrayNames.length) {
      this.bandera = false;
      alert("Número de objetos en columnas no concuerda, por favor asegurarse que sea igual");
    } else {
      for (let i = 0; i < this.arrayDates.length; i++) {
        console.log(this.arrayDates[i]);
        let fecha_izquierda = this.arrayDates[i].split(" to ");
        console.log("Fecha izquierad: ", fecha_izquierda);

        if (this.dateValidator(fecha_izquierda[0]) && this.dateValidator(fecha_izquierda[1])) {
          this.bandera = true;
          for (let j = fecha_izquierda[0].substr(9, 10); j <= fecha_izquierda[1].substr(9, 10); j++) {
            this.items.push(fecha_izquierda[0].substr(0, 9) + j);
            console.log("Estos son los items: ", this.items);
          }
        } else {
          this.bandera = false;
          alert("Formato de fechas incorrecto, por favor corregirlo");
        }   
      }
    }
  }

  public dateValidator(fecha) {
    
    let validator = /^\d{4}\-\d{2}\-\d{2}$/;
    if ((fecha.match(validator)) && (fecha != '')) {
      return true;
    } else {
      return false;
    }
  }
}
