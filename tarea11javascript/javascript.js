let topping = prompt("Que topping quiere comprar? 1- Oreo, 2- KitKat, 3- Kinder ");
let precio;
let precioFinal;
let helado= 50;

if (topping == "Oreo") {
    precio = 10
    alert("El precio del topping Oreo es de $ " + precio +  " pesos ");
}
else if (topping == "KitKat") {
 precio = 15
 alert("El precio del topping KitKat es de $ "  + precio +  " pesos ");
 } else if (topping == "Kinder") {
    precio = 25
    alert("el precio del topping Kinder es de $ "  + precio +  " pesos ");
 }else { 
    alert("no tenemos este topping");
 }

 precioFinal  = (helado + precio);
 alert("el helado cuesta $ " + precioFinal + " pesos ");
