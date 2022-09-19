let info_producto = [];
let coment_product = [];

let relatedProducts = [];
let idProducto = localStorage.getItem("ProductID");
let infoProductsContainer = document.getElementById('product_info');
let commentsProductsContainer = document.getElementById('comments_info');
let related = document.getElementById('related')
;
function  newProduct(id){
    localStorage.setItem("ProductID",id);
    window.location.href="product-info.html"
}

function showRelated(arrayrelated){
    //let product =array;
    let htmlContentToAppend4="";
    console.log(arrayrelated);
   
   for(let i=0 ; i<arrayrelated.length;i++){
         let x = arrayrelated[i];
         htmlContentToAppend4+=`
        
         <div onclick="newProduct(${x.id});" class="card justify-content-center contenedorRelated">
         <h6 class="nameRelated">${x.name}</h6><br>
         <div>
         <img src="${x.image}" class="img-thumbnail w-100 m-auto" style="background-color:#009999; border-radius:20%;">  
         </div>  
         </div>
         
        `
   }
    related.innerHTML=htmlContentToAppend4;

}
function showComents(array){
    let htmlContentToAppend2 = "";
    for (let i = 0; i < array.length; i++) {
         let comentario = array[i];
         let puntaje = "";


         for (let i = 1; i <= comentario.score; i++) {
              puntaje += `<span class= "fa fa-star checked"></span>`;
         }

         for (let i = comentario.score + 1; i <= 5; i++) {
              puntaje += `<span class= "fa fa-star estrellita"></span>`;
         }

         
         htmlContentToAppend2 +=`
                    <div class="container contenedorComentarios" style="height:7rem">
                    <div class="estrellitas">` + puntaje + `</div>
                      <div class="comentario"><strong class="strong_comments">` + comentario.user + `</strong> comentó: <br>
                      ` + comentario.description + `</div>
                      <div>
                      <p class="colordate">` + comentario.dateTime + `</p>
                      </div>
                     
                      </div>
                      `}
    commentsProductsContainer.innerHTML+= htmlContentToAppend2;                 
}



function showMyProduct(array) {
 
     let htmlContentToAppend = "";
   
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
                       <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
                       <div class="carousel-inner">
                         <div class="carousel-item active">
                           <img  src="img/prod${productID}_1.jpg" class="d-block w-65 h-25 m-auto" style="border-radius:20%; border:5px solid #009999">
                         </div>
                         <div class="carousel-item">
                           <img src="img/prod${productID}_2.jpg" class="d-block w-65 h-25 m-auto" style="border-radius:20%; border:5px solid #009999">
                         </div>
                         <div class="carousel-item">
                           <img src="img/prod${productID}_3.jpg" class="d-block w-65 h-25 m-auto" style="border-radius:20%; border:5px solid #009999">
                         </div>
                         <div class="carousel-item">
                         <img src="img/prod${productID}_4.jpg" class="d-block w-65 h-25 m-auto" style="border-radius:20%; border:5px solid #009999">
                       </div>
                       </div>
                       <button class="carousel-control-prev iconCarru" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                         <span class="visually-hidden">Previous</span>
                       </button>
                       <button class="carousel-control-next iconCarru" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                         <span class="carousel-control-next-icon" aria-hidden="true"></span>
                         <span class="visually-hidden">Next</span>
                       </button>
                     </div>


                       <div class="image_product">
                       <img src="img/prod${productID}_1.jpg" alt="product image"  class="img-thumbnail imagen_productos image_car" style="border-radius:20%">
                       </div>
                       <div class="image_product">
                       <img src="img/prod${productID}_2.jpg" alt="product image"  class="img-thumbnail imagen_productos image_car" style="border-radius:20%">
                       </div>
                       <div class="image_product">
                       <img src="img/prod${productID}_3.jpg" alt="product image"  class="img-thumbnail imagen_productos image_car" style="border-radius:20%">
                       </div>
                       <div class="image_product">
                       <img src="img/prod${productID}_4.jpg" alt="product image"  class="img-thumbnail imagen_productos image_car" style="border-radius:20%">
                       </div>
                   </div>
               
              </div> 
          `      
     infoProductsContainer.innerHTML+= htmlContentToAppend;
   
    }




function myFunction() {
     let calificacion = document.getElementById("newCommentC");
     var x = document.getElementById("myComment").value;
     y = calificacion.options[calificacion.selectedIndex].value;
     if (x == "") {
          alert('Escribe un comentario y puntúa el producto!');


     } else {
          localStorage.setItem(`Comentario${idProducto}`, x)
          localStorage.setItem(`calificacion${idProducto}`, y);
          location.reload();
          showMyProduct();
     }
}


if (localStorage.getItem(`Comentario${idProducto}`) !== null) {
     let usuario = localStorage.getItem('Usuario');
     let y = localStorage.getItem(`calificacion${idProducto}`);
     let puntaje2 = parseInt(y);
     let comentario = localStorage.getItem(`Comentario${idProducto}`);
     let cali = "";
     //console.log("mi puntaje:" + puntaje2)
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
              showComents(coment_product);

         }
    });
    
     getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
          if (resultObj.status === "ok") {
               //Obtengo el array que contiene los detalles del producto!
               info_producto = resultObj.data;
               relatedProducts=info_producto.relatedProducts;
               showMyProduct(info_producto);
               showRelated(relatedProducts);
          }

     });
   
});