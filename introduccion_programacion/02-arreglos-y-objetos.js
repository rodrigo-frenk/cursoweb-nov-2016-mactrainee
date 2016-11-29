// Arreglos / Arrays

frutas = [ "manzana", "pera", "fresa" ];

console.log( "La primera fruta es:", frutas[0] );
console.log( "La segunda fruta es:", frutas[1] );
console.log( "La tercera fruta es:", frutas[2] );

// Javascript puede manejar cuando pedimos índices que no existen:
console.log( "La cuarta fruta es:", frutas[3] );


// Podemos cambiar los valores almacenados
frutas[0] = "piña";
console.log( "Ahora, la primera fruta es:", frutas[0] );

frutas[3] = "guayaba";
console.log( "La cuarta fruta es:", frutas[3] );


// Revisar el tamaño del Arreglo

numFrutas = frutas.length;
console.log( "El número de frutas es:", numFrutas );



nuevaFruta = "zapote";
frutas.push( nuevaFruta )

frutas.push( "guanábana" )


// Mostrar el arreglo:

console.log( frutas );



// Sacar la ultima fruta del arreglo, almacenarla en una variable

ultimaFruta = frutas.pop();

console.log( "la ultima fruta es:", ultimaFruta );

console.log( frutas );




// Averiguar el índice del elemento

indice = frutas.indexOf( "pera" );

console.log( "la fruta elegida está en la posición:", indice );



// Eliminar un elemento específico del arreglo usando su índice

indice = frutas.indexOf( "fresa" );

// tenemos que especificar cuántos elementos queremos eliminar. en este caso, 1.
frutas.splice( indice, 1 );

// veamos ahora el arreglo sin el elemento eliminado
console.log( "eliminamos el elemento en la posicion", indice );
console.log( "arreglo ahora:", frutas );



// iterar por un arreglo:
for (var i = 0; i < frutas.length; i++) {
  console.log( "hoy vendemos:", frutas[i] );
}

// lo mismo, pero más simple:
for( i in frutas ) {
  console.log( "hoy vendemos:", frutas[i] );
}




// Arreglos Asociativos

capitales = [];

capitales["Rusia"] = "Moscú";
capitales["Francia"] = "París";
capitales["Mongolia"] = "Ulán Bator";
capitales["Colombia"] = "Bogotá";



pais = "Mongolia";

console.log( "La capital de ", pais, "es", capitales[ pais ] );



personas = []

personas["JIT150101HASIR03"] = "MARIA JIMENEZ TORRES";
personas["ERGN710101HASRTR01"] = "NAJERA ERNESTO GUTIERREZ";

curp = "ERGN710101HASRTR01"

console.log( "la persona con el curp", curp, "es", personas[ curp ]);





//En Javascript, no se utilizan tanto los arreglos, si no más bien los "Objetos"



// Objetos:

objeto = {

  propiedad1: "valor1",
  propiedad2: "valor2",
  propiedad3: "valor3",

  metodo1: function() {
    console.log("ejecutamos el metodo1");
  },

  metodo2: function() {
    console.log(
      "ejecutamos el metodo2, las propiedades son:",
      this.propiedad1,
      this.propiedad2,
      this.propiedad3
    );
  },

};

// Podemos recuperar las propiedades almacenadas en el objeto:

console.log("la primera propiedad es:", objeto.propiedad1 );


// Invocar un método de un objeto:
objeto.metodo1();
objeto.metodo2();





// Probemos con "Personas":

personas = [];

persona1 = {
  id: 331,
  nombres: "María",
  apellidos: "Jiménez Torres",
  edad: 37,
  ocupacion: "deportista",
  padres: 0,
  nombreCompleto: function() {
    return this.apellidos + ", " + this.nombres;
  }
};


persona2 = {
  id: 332,
  nombres: "Ernesto",
  apellidos: "Gutiérrez Nájera",
  edad: 39,
  ocupacion: "entrenador",
  padres: 0,
  nombreCompleto: function() {
    return this.apellidos + ", " + this.nombres;
  }
};

persona3 = {
  id: 333,
  nombres: "Alberto",
  apellidos: "Gutiérrez Jiménez",
  edad: 11,
  ocupacion: "",
  padres: [ 331, 332 ],
  nombreCompleto: function() {
    return this.apellidos + ", " + this.nombres;
  }
};

personas.push( persona1 )
personas.push( persona2 )
personas.push( persona3 )


console.log("Las personas almacenadas son:", personas );


// Un algoritmo nada eficiente para investigar los nombres
// de los padres de una persona:

for( i in personas ) {

  cadaPersona = personas[ i ];

  // en otros lenguajes, tendríamos que revisar si
  // "padres" es un arreglo antes de iterar.
  // En JS, sin embargo, no es necesario.

  // if( cadaPersona.padres.isArray() ) {

  for( j in cadaPersona.padres ) {

    idPadre = cadaPersona.padres[ j ]

    // Volvemos a buscar en el arreglo de las personas
    // a aquella que tenga la ID del padre

    for( k in personas ) {

      if( personas[ k ].id == idPadre ) {
        console.log( personas[ k ].nombreCompleto(), "es padre de", cadaPersona.nombreCompleto() );
      }
    }

  }

  // }

}



console.log("Introducción a Javascript: Arreglos");
