let Menu =prompt("Que desea pedir 1-carne , 2-pescado, 3-verdura");
switch (Menu) {
case "carne" : alert(" Le ofrecemos Vino tinto como bebida "); break;
case "pescado" : alert(" Le ofrecemos Vino blanco como bebida ") ; break;
case  "verdura" : alert(" le ofrecemos agua como bebida "); break;
default : alert("lo siento, lo que usted pide no lo poseemos en nuestra carta")
}


// Harás una variable que contenga un array de datos, y con el ciclo FOR lo recorrerás.
// Luego insertarás un elemento con las propiedades aprendidas en clase, y lo volverás a recorrer.


let animales = ["perro","mono","toro","rinoceronte"];
let nuevoanimal = "elefante";

for (let i=0; i < animales.length; i++) {
console.log(animales[i]);
}
  
animales.push(nuevoanimal);
console.log(animales);

for (let i =0 ; i < animales.length; i++) {
    console.log(animales[i]);
}


// Con WHILE lo que harás será que, mientras el número sea menor que 11, dirá la frase
// “numero es más chico que 11”, siendo “numero” el valor de tu variable. Recordá hacer incremental
// la variable para que no quede en un bucle infinito.

let num = 0;
while (num<11) {
    console.log(" el " + num  + " es mas chico que 11 ");
    num++;
}