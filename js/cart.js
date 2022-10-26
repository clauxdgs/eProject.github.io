let count = 1;
let tabla = document.getElementById("tablecart");
let menos = document.getElementById("menos");
let mas = document.getElementById("mas");
let array_comprados = [];
let cart_array = [];
let arrayCartProducts = [];
let objetoscomprados = [];
let arraylink = [];
let allpurchases = [];
let envioCost;
let costoProducts = document.getElementById("costoProducts");
let costoEnvio = document.getElementById("costoEnvio");
let costoTotal = document.getElementById("costoTotal");
let parrafoEnvio = document.getElementById("shippingText");
let payM;
let transfer = document.getElementById("tranferencia");
let credit = document.getElementById("creditCard");
let tarjeta = document.getElementById("tarjeta");
let vencimiento = document.getElementById("vencimiento");
let codigo = document.getElementById("codigo");
let nroCuenta = document.getElementById("nroCuenta");
let feedbackpay = document.getElementById("feedback-modalPago");
let allProducts = [];
let products2 = [];
let CART_CONTAINER = document.getElementById("contenedorGeneralCART");
let arraydeproductosComprados = [];
feedbackpay.style.display = 'inline-block';






if (credit.checked) {
     tarjeta.removeAttribute('disabled', '');
     vencimiento.removeAttribute('disabled', '');
     codigo.removeAttribute('disabled', '');
     tarjeta.setAttribute('required', '');
     vencimiento.setAttribute('required', '');
     codigo.setAttribute('required', '');
     nroCuenta.removeAttribute('required');
     nroCuenta.setAttribute('disabled', '');
}

function getitemlink() {
     objetoscomprados = JSON.parse(localStorage.getItem('product'));


     for (let i = 0; i < objetoscomprados.length; i++) {
          let id = objetoscomprados[i];
          //console.log(id);
          let link = `https://japceibal.github.io/emercado-api/products/` + id + `.json`;
          if (!arraylink.includes(link)) {
               arraylink.push(link);
          }
     }
}

function compraRealizada(){
     let arrayvacio=[];
     localStorage.setItem("product", JSON.stringify(arrayvacio));
     contenedorGeneralCART.innerHTML = `<div class="card compraexitosa" >
  <div class="card-body">
  <p class="titulo_productos" style="color:black;"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
</svg> COMPRA EXITOSA!
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
</svg></p >
    <h5 class="text-center tituloGrande">GRACIAS POR ELEGIRNOS</h5>
   <p class="text-end"><a class="linka3 text-end" href="categories.html">Realizar una nueva compra</a></p> 
</div>`;

}

function deleteProduct(id) {
     let productPurchased = JSON.parse(localStorage.getItem("product"));

     for (let i = 0; i < productPurchased.length; i++) {
          let id2 = productPurchased[i];
          let indice = productPurchased.indexOf(id2);
          if (id2 == id) {
               console.log(productPurchased)

               productPurchased.splice(indice, 1)
               console.log(productPurchased)

               //localStorage.setItem("product", JSON.stringify());
          }
          localStorage.setItem("product", JSON.stringify(productPurchased));
     }
     getitemlink();
     location.reload();
}



function pagoElegido() {
     let tipoDePagos = document.getElementsByName("tipopago");
     // console.log(tipoDePagos);
     for (let i = 0; i < tipoDePagos.length; i++) {
          let pay = tipoDePagos[i];
          if (pay.checked) {
               payM = pay.value;
               //console.log(payM+"estemetodo")
               //  console.log(envioCost)
          }
     }
     if (payM == 1) {
          tarjeta.removeAttribute('disabled', '');
          vencimiento.removeAttribute('disabled', '');
          codigo.removeAttribute('disabled', '');
          tarjeta.setAttribute('required', '');
          vencimiento.setAttribute('required', '');
          codigo.setAttribute('required', '');
          nroCuenta.removeAttribute('required');
          nroCuenta.setAttribute('disabled', '');

          if (tarjeta.value !== "" && vencimiento.value !== "" && codigo.value !== "") {
               feedbackpay.style.display = "none";
          } else {
               feedbackpay.style.display = "inline-block";
          }

     } else {
          tarjeta.setAttribute('disabled', '')
          vencimiento.setAttribute('disabled', '');
          codigo.setAttribute('disabled', '');
          nroCuenta.removeAttribute('disabled');
          nroCuenta.setAttribute('enabled', '');
          nroCuenta.setAttribute('required', '');
          if (nroCuenta.value !== "") {
               feedbackpay.style.display = "none";
          } else {
               feedbackpay.style.display = "inline-block";
          }

     }


}


(() => {
     'use strict'

     // Fetch all the forms we want to apply custom Bootstrap validation styles to
     const forms = document.querySelectorAll('.needs-validation')

     //console.log(forms);
     // Loop over them and prevent submission
     Array.from(forms).forEach(form => {
          //console.log(form)
          form.addEventListener('submit', event => {
               if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                   
               }else{
                    compraRealizada();
               }
               form.classList.add('was-validated')
               
          }, false)
     })
})()

function tipoEnvio() {
     let costshipping=0;
     let costoFinal=0;
     let tipoEnvios = document.getElementsByName("tipoEnvio");

     //console.log(tipoEnvios);
     for (let i = 0; i < tipoEnvios.length; i++) {
          let clasedeenvio = tipoEnvios[i];
          //console.log(clasedeenvio.checked)
          //console.log(clasedeenvio);
          if (clasedeenvio.checked) {
               envioCost = clasedeenvio.value;
               //  console.log(envioCost)
          }
     }
     let totalproductos = parseInt(costoProducts.innerHTML);
     costshipping = Math.round((envioCost / 100) * totalproductos);
     costoFinal = Math.round(totalproductos + costshipping);
    
     parrafoEnvio.innerHTML = `El costo de envio sera del ` + envioCost + `% del total de tu compra!`;
    
     //console.log(totalproductos);

     costoEnvio.innerHTML = costshipping;
     //console.log(costshipping);

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
     //console.log(subtotales)
     let suma=0;
     
     for (let i = 0; i < subtotales.length; i++) {
          suma += parseInt(subtotales[i].innerHTML);
          //console.log(parseInt(subtotales[i].innerHTML));

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




//function showCart(array) {
//      let costoele = Math.round(element.unitCost);
//      tabla.innerHTML += `
//      <table class="table">
//           <thead class="thead-dark">
//           <tr>

//           </tr>
//           </thead>
//           <tbody>
//           <tr id="productoOne">

//                <td class="col-2"><image src="img/prod${element.id}_1.jpg" class="imgtable"></image></td>
//                <td class="col-2">${element.name}</td>
//                <td class="col-2">${costoele} ${element.currency}</td>
//                <td class="col-2">
//                <input id="cantidad${element.id}" class="quantity cant col-5 text-center" min="1" max="999999" name="quantity" value="${element.count}" type="number" onchange="calcSubtotal(${element.id},${costoele})"> </td>
//                <td class="col-2"><strong> ${element.currency} <label id="subtotal${element.id}" class="subtotales">${costoele*element.count} </label> </strong></td>
//                <td class="col-2">
//                <button type="button" class="btn btneliminar" onclick="deleteItem(${element.id})">
//                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#009999"
//                class="bi bi-trash-fill btneliminar" viewbox="0 0 16 16"> <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
//                </svg> 
//                </button> 
//                </td>
//           </tr>
//           </tbody>
//      </table>`

// }
//      totalCOST();
// }

function showProduct() {
    
       
     array = JSON.parse(localStorage.getItem("comprado"));
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
                    <button type="button" class="btn btneliminar" onclick="deleteProduct(${array.id})">
                    <svg xmlns ="http://www.w3.org/2000/svg" width="16" height="16" fill="#009999" class="bi bi-trash-fill btneliminar" viewbox="0 0 16 16"> <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg> 
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
           }
     });

     objetoscomprados = JSON.parse(localStorage.getItem('product'));
     for (let i = 0; i < cart_array.length; i++) {
          let id = cart_array[i].id;
          console.log(id)
          if (!objetoscomprados.includes(id)) {
               objetoscomprados.push(id);
               localStorage.setItem('product', JSON.stringify(objetoscomprados));
          }
     }
     getitemlink();

     // console.log(arraylink);
     for (let i = 0; i < arraylink.length; i++) {
          const link = arraylink[i];
          getJSONData(link).then(function (resultObj) {
               if (resultObj.status === "ok") {
                    array_comprados = resultObj.data;

                    localStorage.setItem('comprado', JSON.stringify(array_comprados));
                     
                    showProduct();
                    
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

window.onload = function () {
     getitemlink();
     totalCOST();

};