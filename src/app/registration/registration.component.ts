import { Component } from '@angular/core';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {

  /*
  Buenas tardes, el código recibe items de dos campos, primero que todo hice las validaciones para que los campos tuviera exactamente el mismo tamaño, que era una de las condiciones del ejercicio, posteriormente la validación del formato de las fechas que era otra de las condiciones del ejercicio. 

  Una vez hecho esto lo que hice es tratar la información para crear un array con el y/o nombres(En caso de que sean mas de uno), y fechas. 

  En el html, usamos tres directivas de angular principales, el ngModel para tomar los datos dinámicamente de los campos y asignarselos a las variables, usamos la directiva ng if para asegurarnos de generar una lista con toda la data una vez las validaciones no generen ningún erro, y por ultimo usamos la directiva ng for que nos permite iterar en un array de elementos para imprimir su información. 
      
  En este ejercicio obtengo dos array, uno con los nombres y otro con las fechas, cada fecha asociada a un nombre, en el html pongo a iterar los nombres primero y por cada nombre obtengo las fechas pertinentes, una vez termina de iterar la fecha, continua con el siguiente nombre y sus respectivas fechas sucesivamente hasta que la data termina. 
    
  Agradezco por la revisión del archivo y sobretodo el tiempo tomado para revisar el código.
  */

  bandera: boolean = false;
  arrayNames = [];
  arrayNamesNew = [];
  arrayDatesNew = [];
  arrayDates = [];
  names: string = "";
  dates: string = "";
  items = [];
  constructor() { }

  generateList() {
    this.items = [];
    this.arrayNamesNew = [];
    this.arrayDatesNew = [];
    this.arrayNames = this.names.split("\n");
    this.arrayDates = this.dates.split("\n");
    console.log("Array nombres: ", this.arrayNames);
    console.log("Array Fechas: ", this.arrayDates);

    if (this.arrayDates.length != this.arrayNames.length) {
      this.bandera = false;
      alert("Número de objetos en columnas no concuerda, por favor asegurarse que sea igual");
    } else {
      for (let i = 0; i < this.arrayDates.length; i++) {
        this.items = [];
        console.log(this.arrayDates[i]);
        let fecha_izquierda = this.arrayDates[i].split(" to ");
        if (this.dateValidator(fecha_izquierda[0]) && this.dateValidator(fecha_izquierda[1])) {
          this.bandera = true;
          for (let j = parseInt(fecha_izquierda[0].substr(8, 2).trimLeft('0')); j <= parseInt(fecha_izquierda[1].substr(8, 2).trimLeft('0')); j++) {
            this.items.push(fecha_izquierda[0].substr(0, 8) + j);
          }
          this.arrayNamesNew.push(this.arrayNames[i]);
          this.arrayDatesNew.push(this.items);
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
