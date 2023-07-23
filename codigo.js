
let carrito = 0;

let suscripcion = prompt ("¿Que nivel de suscripcion quieres adquirir?\n 1_ Pasante Novato (id: 1) --> $200 \n 2_ Paleontologo Intermedio (id: 2) --> $500 \n 3_ Paleontologo Profecional (id: 3) --> $1000 \n 4_ No quiero ninguna");

 while (suscripcion != 4){
    switch (suscripcion){
        case "1" :
         alert ("Felicidades!!! Acabas de comprar el nivel Pasante Novato!!!");
         totaldelCarrito(200);
         break;

         case "2" :
         alert ("Felicidades!!! Acabas de comprar el nivel Paleontologo Intermedio!!!");
         totaldelCarrito(500);
         break;

        case "3" : 
        alert ("Felicidades!!! Acabas de comprar el nivel Paleontologo Profecional!!!");
        totaldelCarrito(1000);
        break;

        case"5" :
        alert ("Tu carrito lleva un total de " + carrito);
        break;

        default : 
        alert ("Disculpe, pero no se ha detectado ninguna opcion.")
    }
    suscripcion = prompt ("¿Que nivel de suscripcion quieres adquirir?\n 1_ Pasante Novato (id: 1) --> $200 \n 2_ Paleontologo Intermedio (id: 2) --> $500 \n 3_ Paleontologo Profecional (id: 3) --> $1000 \n 4_ No quiero ninguna \n 5_Ver carrito");

 }
  
 function totaldelCarrito (precioSuscrip){
    carrito = carrito + precioSuscrip;
 }

function filtrarDetalles(detallesTotales){
   const beneficios = listaMembrecias.filter((suscripcion) => suscripcion.id == detallesTotales);
   return beneficios;
}

let detallesConsulta = prompt(`Seleccione la opcion numerica de la membresia que desee ver analizar (ejemplo 1, 2 o 3)`);

   const detallesABuscar = filtrarDetalles(detallesConsulta);
   console.table(detallesABuscar);
