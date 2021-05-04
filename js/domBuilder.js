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
                        <p class="card-text">Stock: ${product.stock}</p>
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
        `<li><a class="dropdown-item"> ${product.name} = ${product.price}</a></li>`;
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

//CARRITO DE COMPRAS QUE NO FUNCIONA
/*lo que yo interpreto es que, busca en mi carrito de compras (que se ve por consola) y por cada uno de ellos
crea el HTML como si fuera lista del navbar, la verdad es que no se cómo hacer que se vea en el boton el carrito 
(un cuadro con lo comprado)*/

    const productCarrito = $("#carritoCompras")[0]
        myShoppingCart.forEach(function(product){
        if(product){
            productCarrito.innerHTML += buildCarrito(product)
        }
        });

    
});




