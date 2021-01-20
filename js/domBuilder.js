//DOM BUILDER PRODUCTS

function buildProductCard(){
    const htmlCard=
         `<div class="col-lg-4 pasteleria__card">
                <div class="card" style="width: 18rem;">
                    <img src="${image}" class="card-img-top" alt="img">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${description}</p>
                        <p class="card-text">${price}</p>
                        <a href="#" class="btn btn-primary">Agregar al pedido</a>
                    </div>
                </div>
            </div>`

            return htmlCard;
}
