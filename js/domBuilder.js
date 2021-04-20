//CONSTRUYO EL MOLDE DEL HTML

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