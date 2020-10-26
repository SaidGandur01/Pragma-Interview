# Pragma-Interview
Prueba de angular para entrevista de trabajo

Buenas tardes, el código recibe items de dos campos, primero que todo hice las validaciones para que los campos tuviera exactamente el mismo tamaño, que era una de las condiciones del ejercicio, posteriormente la validación del formato de las fechas que era otra de las condiciones del ejercicio. 

Una vez hecho esto lo que hice es tratar la información para crear un array con el y/o nombres(En caso de que sean mas de uno), y fechas. 

En el html, usamos tres directivas de angular principales, el ngModel para tomar los datos dinámicamente de los campos y asignarselos a las variables, usamos la directiva ng if para asegurarnos de generar una lista con toda la data una vez las validaciones no generen ningún erro, y por ultimo usamos la directiva ng for que nos permite iterar en un array de elementos para imprimir su información. 
      
En este ejercicio obtengo dos array, uno con los nombres y otro con las fechas, cada fecha asociada a un nombre, en el html pongo a iterar los nombres primero y por cada nombre obtengo las fechas pertinentes, una vez termina de iterar la fecha, continua con el siguiente nombre y sus respectivas fechas sucesivamente hasta que la data termina. 
    
Agradezco por la revisión del archivo y sobretodo el tiempo tomado para revisar el código.

PD: No olvidar instalar las depencias de node para poder correr el proyecto, satisfactoriamente con npm start.
