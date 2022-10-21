let count = 1;
let tabla = document.getElementById("tablecart");
let menos = document.getElementById("menos");
let mas = document.getElementById("mas");
let array_comprados = [];
let arrayCartProducts = [];
let objetoscomprados = [];
let arraylink = [];
let productsCost = [];
let envioCost;
let costoProducts = document.getElementById("costoProducts");
let costoEnvio = document.getElementById("costoEnvio");
let costoTotal = document.getElementById("costoTotal");
let parrafoEnvio = document.getElementById("shippingText");
//console.log(parrafoEnvio)
//console.log(objetoscomprados)

function tipoEnvio() {
     let tipoEnvios = document.getElementsByName("tipoEnvio");
     //console.log(tipoEnvios);
     for (let i = 0; i < tipoEnvios.length; i++) {
          let clasedeenvio = tipoEnvios[i];
          //console.log(clasedeenvio);
          if (clasedeenvio.checked) {
               envioCost = clasedeenvio.value;
               //  console.log(envioCost)
          }
     }
     parrafoEnvio.innerHTML = `El costo de envio sera del ` + envioCost + `% del total de tu compra!`;
     let totalproductos = parseInt(costoProducts.innerHTML);
     //console.log(totalproductos);
     let costshipping = Math.round((envioCost / 100) * totalproductos);
     costoEnvio.innerHTML = costshipping;
     console.log(costshipping);
     let costoFinal = Math.round(totalproductos + costshipping);
     costoTotal.innerHTML = costoFinal;
}

//Metodo de para encontrar el tipo de envio elegido con JQUERY
// $("input[name='tipoEnvio']").on('change', function (a) {
//      let costoEnvio = $("input[name='tipoEnvio']:checked").val();
//     // console.log(costoEnvio);
//      $("#shippingText").empty();
//      $("#shippingText").append("El Costo de envio sera del " + costoEnvio + "% del total de tu compra!");
// });

//Metodo para el calculo del costo de envio y Costo Total con Jquery
//   let totalproductos = parseInt(costoProducts.innerHTML);
//       //console.log(totalproductos);
//       console.log(envioCost);
//      let shipping=0;
//      shipping;

// //      shipping=$("input[name='tipoEnvio']:checked").val();
// //      let costshipping= (shipping/100)*totalproductos;

// //      costoEnvio.innerHTML= Math.round(costshipping);

// //     let costototal = totalproductos+costshipping;
// //     costoTotal.innerHTML=Math.round(costototal);
// //     //console.log(costototal);




function totalCOST() {
     let subtotales = document.getElementsByClassName("subtotales");
     let suma = 0;
     for (let i = 0; i < subtotales.length; i++) {
          suma += parseInt(subtotales[i].innerHTML);
     }
     costoProducts.innerHTML = suma;
     tipoEnvio();
}

function calcSubtotal(id, cost) {
     let cant = parseInt(document.getElementById(`cantidad${id}`).value);
     //console.log(cant);
     //console.log(cost);
     let subt = cant * cost;
     document.getElementById(`subtotal${id}`).innerHTML = subt;
     totalCOST();
}




function showCart(array) {
     for (let i = 0; i < array.length; i++) {
          const element = array[i];
          let costoele = Math.round(element.unitCost);
          tabla.innerHTML += `
          <table class="table">
               <thead class="thead-dark">
               <tr>
                
               </tr>
               </thead>
               <tbody>
               <tr>
                 
                    <td class="col-2"><image src="img/prod${element.id}_1.jpg" class="imgtable"></image></td>
                    <td class="col-2">${element.name}</td>
                    <td class="col-2">${costoele} ${element.currency}</td>
                    <td class="col-2">
                    <input id="cantidad${element.id}" class="quantity cant col-5 text-center" min="1" max="999999" name="quantity" value="${element.count}" type="number" onchange="calcSubtotal(${element.id},${costoele})"> </td>
                    <td class="col-2"><strong> ${element.currency} <label id="subtotal${element.id}" class="subtotales">${costoele*element.count} </label> </strong></td>
                    <td class="col-2">
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewbox="0 0 16 16"> <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg> 
                    </button> 
                    </td>
               </tr>
               </tbody>
          </table>`

     }
     totalCOST();
}

function showProduct(array) {
     // console.log(array)
     if (array.currency == "UYU") {
          costo = Math.round(array.cost / 40);
          // console.log(costo);
     } else {
          costo = Math.round(array.cost);
          // console.log(costo);
     }

     tabla.innerHTML += `
          <table class="table">
               <thead class="thead-dark">
               <tr>
                
               </tr>
               </thead>
               <tbody>
                  
                    <td class="col-2"><image  src="img/prod${array.id}_1.jpg" class="imgtable"></image></td>
                    <td class="col-2">${array.name}</td>
                    <td  class="co-2">${costo} ${array.currency}</td>
                    <td class="col-2">
                    <input id="cantidad${array.id}" class="quantity col-5 text-center" min="1" max="999999" name="quantity" value="${count}" type="number" onchange="calcSubtotal(${array.id},${costo})"></td>
                    <td class="col-2"><strong> USD <label id="subtotal${array.id}" class="subtotales">${costo*count} </label> </strong></td>
                    <td class="col-2">
                     <button> 
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewbox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                     </svg>
                     </button>
                    </td>
               </tr>
               </tbody>
          </table>`
     totalCOST();

}



document.addEventListener("DOMContentLoaded", function (e) {
     getJSONData(CART_INFO_URL).then(function (resultObj) {
          if (resultObj.status === "ok") {
               //obtengo el array que contiene los comentarios del producto
               cart_array = resultObj.data.articles;
               // console.log(cart_array)
               showCart(cart_array);
          }
     });

     objetoscomprados = JSON.parse(localStorage.getItem('product'));
     for (let i = 0; i < objetoscomprados.length; i++) {
          let id = objetoscomprados[i];
          //console.log(id);
          let link = `https://japceibal.github.io/emercado-api/products/` + id + `.json`;
          if (!arraylink.includes(link)) {
               arraylink.push(link);
          }
     }
     // console.log(arraylink);
     for (let i = 0; i < arraylink.length; i++) {
          const link = arraylink[i];
          getJSONData(link).then(function (resultObj) {
               if (resultObj.status === "ok") {
                    array_comprados = resultObj.data;
                    // console.log(array_comprados)
                    showProduct(array_comprados);
               }
          });

     }
     let tiposDeEnvio = document.getElementsByName("tipoEnvio");
     for (let i = 0; i < tiposDeEnvio.length; i++) {
          tiposDeEnvio[i].addEventListener("change", function () {
               totalCOST();
          });
     }

     tipoEnvio();
});