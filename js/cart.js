let count = 1;
let tabla = document.getElementById("tablecart");
let menos = document.getElementById("menos");
let mas = document.getElementById("mas");
let array_comprados = [];
let arrayCartProducts = [];
let objetoscomprados = [];
let arraylink = [];

//console.log(objetoscomprados)

function calcSubtotal(id, cost) {
     let cant = parseInt(document.getElementById(`cantidad${id}`).value);
     //console.log(cant);
     //console.log(cost);
     let subt = cant * cost;
     document.getElementById(`subtotal${id}`).innerHTML = subt;


}


function showCart(array) {
     for (let i = 0; i < array.length; i++) {
          const element = array[i];
          tabla.innerHTML += `
          <table class="table">
               <thead class="thead-dark">
               <tr>
                
               </tr>
               </thead>
               <tbody>
               <tr>
                    <th scope="row">${element.id}</th>
                    <td class="col-2"><image src="img/prod${element.id}_1.jpg" class="imgtable"></image></td>
                    <td class="col-2">${element.name}</td>
                    <td class="col-2">${element.unitCost} ${element.currency}</td>
                    <td class="col-2">
                    <input id="cantidad${element.id}" class="quantity cant col-5 text-center" min="1" max="999" name="quantity" value="${element.count}" type="number" onchange="calcSubtotal(${element.id},${element.unitCost})"> </td>
                    <td class="col-2"><strong> ${element.currency} <label id="subtotal${element.id}">${element.unitCost*element.count} </label> </strong></td>
               </tr>
               </tbody>
          </table>`

     }

}

function showProduct(array) {
     console.log(array)
     tabla.innerHTML += `
          <table class="table">
               <thead class="thead-dark">
               <tr>
                
               </tr>
               </thead>
               <tbody>
                    <th scope="row">${array.id}</th>
                    <td class="col-2"><image  src="img/prod${array.id}_1.jpg" class="imgtable"></image></td>
                    <td class="col-2">${array.name}</td>
                    <td  class="co-2">${array.cost} ${array.currency}</td>
                    <td class="col-2">
                    <input id="cantidad${array.id}" class="quantity col-5 text-center" min="1" max="999" name="quantity" value="${count}" type="number" onchange="calcSubtotal(${array.id},${array.cost})"></td>
                    <td class="col-2"><strong> ${array.currency} <label id="subtotal${array.id}">${array.cost*count} </label> </strong></td>
               </tr>
               </tbody>
          </table>`

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

                    console.log(array_comprados)
                    showProduct(array_comprados);

               }


          });



     }



});