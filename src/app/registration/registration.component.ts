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
    this.bandera = true;

    for (let i = 0; i < this.arrayDates.length; i++){
      console.log(this.arrayDates[i]);
      let fecha_izquierda = this.arrayDates[i].split(" to ");
      console.log("Fecha izquierad: ", fecha_izquierda);
      for (let j = fecha_izquierda[0].substr(9, 10); j <= fecha_izquierda[1].substr(9, 10); j++){
        this.items.push(fecha_izquierda[0].substr(0, 9) + j);
        console.log("Estos son los items: ", this.items);
      }
    }
  }
}
