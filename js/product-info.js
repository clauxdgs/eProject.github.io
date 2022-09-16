 let info_producto = [];
 let coment_product = [];

 let relatedProducts = [];
 idProducto = localStorage.getItem("ProductID");


 let infoProductsContainer = document.getElementById('product_info');
 let commentsProductsContainer = document.getElementById('comments_info');
 //let mycomment= document.getElementById("myComent");


 function showMyProduct(array, arrayComments) {

      let htmlContentToAppend = "";
      let htmlContentToAppend2 = "";

      //console.log(array, arrayComments);
      //console.log(arrayComments);
      htmlContentToAppend += `
     <div id="contenedorProductInfo" class="list-group-item list-group-item-action cursor-active">
               <div class="row">
                    <div>
                        <div style="width:100%">
                         <div>
                           <h1  class="name_products">` + array.name + `</h1> 
                           <h8 class="strong_products"> Categoria: ` + array.category + `</h8>
                            
                            <div class="descripcion_productos" style="font-style:  italic;">
                            <h3 class="strong_products"> Descripción del Producto: </h3>` + array.description + `</div>
                            <br><br>

                         <div class="row contenedorCostSold">
                            <div class= "infoProdata"><strong class="strong_products">Precio: <br>
                            </strong>` + array.cost + ` <strong class="strong_products">` + array.currency + `</strong>
                            </div>

                            
                             <div class= "infoProdata" ><strong style="color: #009999;">Cantidad Productos Vendidos:<br> </strong>` + array.soldCount + `</div>
                                                  

                         </div>
                           
                         </div>
                           
                        </div>
                        <div class="image_product">
                        <img src="img/prod${productID}_1.jpg" alt="product image"  class="img-thumbnail imagen_productos image_car">
                        </div>
                        <div class="image_product">
                        <img src="img/prod${productID}_2.jpg" alt="product image"  class="img-thumbnail imagen_productos image_car">
                        </div>
                        <div class="image_product">
                        <img src="img/prod${productID}_3.jpg" alt="product image"  class="img-thumbnail imagen_productos image_car">
                        </div>
                        <div class="image_product">
                        <img src="img/prod${productID}_4.jpg" alt="product image"  class="img-thumbnail imagen_productos image_car">
                        </div>
                    </div>
                
               </div> 
           `
          for (let i = 0; i < arrayComments.length; i++) {
           let comentario = arrayComments[i];
           let puntaje = "";


           for (let i = 1; i <= comentario.score; i++) {
                puntaje += `<span class= "fa fa-star checked"></span>`;
           }

           for (let i = comentario.score + 1; i <= 5; i++) {
                puntaje += `<span class= "fa fa-star estrellita"></span>`;
           }

           
           htmlContentToAppend2 += `
                      <div class="container contenedorComentarios" style="height:7rem">
                      <div class="estrellitas">` + puntaje + `</div>
                        <div class="comentario"><strong class="strong_comments">` + comentario.user + `</strong> comentó: <br>
                        ` + comentario.description + `</div>
                        <div>
                        <p class="colordate">` + comentario.dateTime + `</p>
                        </div>
                       
                        </div>
                        `

      }


      infoProductsContainer.innerHTML = htmlContentToAppend;
      commentsProductsContainer.innerHTML += htmlContentToAppend2;


 }


 function myFunction() {
      let calificacion = document.getElementById("newCommentC");
      var x = document.getElementById("myComment").value;
      y = calificacion.options[calificacion.selectedIndex].value;
      console.log(y);
      if (x == "") {
           alert('Escribe un comentario y puntúa el producto!');


      } else {
           localStorage.setItem(`Comentario${idProducto}`, x)

           console.log(x, y);
           localStorage.setItem(`calificacion${idProducto}`, y);
           location.reload();
           showMyProduct();
      }
 }


 if (localStorage.getItem(`Comentario${idProducto}`) !== null) {
     showMyProduct(info_producto, coment_product);
      let usuario = localStorage.getItem('Usuario');
      let y = localStorage.getItem(`calificacion${idProducto}`);
      let puntaje2 = parseInt(y);
      let comentario = localStorage.getItem(`Comentario${idProducto}`);
      let cali = "";
      console.log("mi puntaje:" + puntaje2)
      let htmlContentToAppend3 = "";

      for (let i = 1; i <= puntaje2; i++) {
           cali += `<span class= "fa fa-star checked"> </span>`;
      }

      for (let i = puntaje2 + 1; i <= 5; i++) {
           cali += `<span class= "fa fa-star estrellita"></span>`;
     }
     
      htmlContentToAppend3 += `
          <div class="container contenedorComentarios" style="height:6rem">
          <div class="estrellitas">` + cali + `</div>
             <div class="comentario"><strong class="strong_comments">` + usuario + `</strong> comentó: <br>
              ` + comentario + `</div>
              <div>
              </div>
              <br>
              </div>
              `
      commentsProductsContainer.innerHTML += htmlContentToAppend3;
 }




 //DOM con ambos URL, obtengo los arrays con getJsonData y los almaceno en dos variables.
 document.addEventListener("DOMContentLoaded", function (e) {
     getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
          if (resultObj.status === "ok") {
               //obtengo el array que contiene los comentarios del producto
               coment_product = resultObj.data;

          }
     });
     
      getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
           if (resultObj.status === "ok") {
                //Obtengo el array que contiene los detalles del producto!
                info_producto = resultObj.data;
                showMyProduct(info_producto, coment_product);


           }

      });

 });