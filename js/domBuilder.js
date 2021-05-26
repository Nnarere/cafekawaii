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
    
    $.getJSON(pasteleriaJSON, function (respuesta, estado){
        if (estado === "success"){
            let misDatos = respuesta;
            for (const product of misDatos){
                productContainerPasteleria.innerHTML += buildProductCard(product)
            }
        }
    })

    const productContainerPanaderia = $("#panaderia__row")[0]

    $.getJSON(panaderiaJSON, function (respuesta, estado){
        if (estado === "success"){
            let misDatos = respuesta;
            for (const product of misDatos){
                productContainerPanaderia.innerHTML += buildProductCard(product)
            }
        }
    })

    const productContainerCafeteria = $("#cafeteria__row")[0]

        /*cafeteria.forEach(function(product){
        if(product.avaliable){
            productContainerCafeteria.innerHTML += buildProductCard(product)
            }
        });*/

    $.getJSON(cafeteriaJSON, function (respuesta, estado){
        if (estado === "success"){
            let misDatos = respuesta;
            for (const product of misDatos){
                productContainerCafeteria.innerHTML += buildProductCard(product)
            }
        }
    })


    localStorage.getItem("total", myShoppingCart);
});


//AJAX CON JQUERY

const cafeteriaJSON = "json/productos-cafeteria.json"
const panaderiaJSON = "json/productos-panaderia.json"
const pasteleriaJSON = "json/productos-pasteleria.json"

let myCafeteria = []
let myPanaderia = []
let myPasteleria = []

fetch("json/productos-cafeteria.json")
    .then(res => res.json())
    .then(data => myCafeteria = data);

fetch("json/productos-panaderia.json")
    .then(res => res.json())
    .then(data => myPanaderia = data)

fetch("json/productos-pasteleria.json")
    .then(res => res.json())
    .then(data => myPasteleria = data)
