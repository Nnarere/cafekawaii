//CONSTRUYO EL MOLDE DE LAS CARDS HTML

function buildProductCard(product){
    const htmlCard =
         `<div class="col-lg-4 pasteleria__card">
                <div class="card" style="width: 18rem;">
                    <img src="${product.image}" class="card-img-top" alt="img">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">$ ${product.price} CLP</p>
                        <input type="number" class="form-control" id="cantidad" placeholder="0">
                        <button onclick="btnFunction(event)" class="btn btn-primary" id="boton" data-name="${product.name}" data-id="${product.id}">Agregar al carrito</button>
                    </div>
                </div>
            </div>`;

            return htmlCard;
};

//CONSTRUIR HTML CARRITO DE COMPRAS (IMAGEN SUPERIOR DERECHA)

function buildCarrito(product){
    const htmlCarrito =
        `<p> ${product.name} = $ ${product.price}</p>`;
    return htmlCarrito;
};

//LLAMO A LOS PRODUCTOS Y LOS INCORPORO EN EL HTML

$ ( document ).ready(function(){

    const productContainerPasteleria = $("#pasteleria__row")[0] //document.getElementById("pasteleria__row")

        pasteleria.forEach(function(product){
        if(product.avaliable){
                productContainerPasteleria.innerHTML += buildProductCard(product);
            }
    });

    const productContainerPanaderia = $("#panaderia__row")[0]

        panaderia.forEach(function(product){
        if(product.avaliable){
            productContainerPanaderia.innerHTML += buildProductCard(product)
            }
    });

    const productContainerCafeteria = $("#cafeteria__row")[0]

        cafeteria.forEach(function(product){
        if(product.avaliable){
            productContainerCafeteria.innerHTML += buildProductCard(product)
            }
        });


    localStorage.getItem("total", myShoppingCart);
});

//ANIMACIONES CON JQUERY


$(window).ready(function(){
    $("h1").fadeOut(2000)
    .fadeIn(3000)
    .css("color","blue");
     });