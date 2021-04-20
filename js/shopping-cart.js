/// CONSTRUCTOR DE CARRITO Y PRODUCTOS ///
function shoppingCart() {     
    var cart = [];
    var total = 0;
    var discount = 0;

    this.addProduct = function(productToPush){
      if (productToPush.stock > 0){
          cart.push(productToPush)
          productToPush.stock = productToPush.stock-1
          alert("Producto agregado al carrito")
          localStorage.setItem("productAdded", JSON.stringify(cart));
          const carto = localStorage.getItem("productAdded");
          console.log(JSON.parse(carto))
          }
        else {alert("No hay stock")}
      }

    //jugar con esto:
    this.updateStock = function(stockToUpdate){
      if (addProduct == true){
      cafeteria.forEach(function(product){
        cafeteria.stock -= 1
      })
      panaderia.forEach(function(product){
        panaderia.stock -= 1
      })
      pasteleria.forEach(function(product){
        pasteleria.stock -= 1
      })
      }
    }
      
        

    this.removeProduct = function(productToSplice) {
        var removeIndex = cart.findIndex(product => product.id === productToSplice.id);
        cart.splice(removeIndex, 1)
        localStorage.setItem("productRemoved", "productNameRemoved")
    }

    this.getById = function(productToFind) {
        cart.findIndex(function(product) {
            if(productToFind == product.name) {
                console.log('Tenés descuento')
                discount = 20;
            }
        })
    }

    this.getCartProductNames = function() {
        cart.forEach(function(product) {
            console.log(product.name);
        })
    }

    this.getCartUnitaryPrice = function() {
        cart.forEach(function(product) {
            console.log(product.price);
        })
    }

    this.getTotal = function() {
        let total=0;
        cart.forEach(function(product) {
            total += product.price
        })
        total -= total * discount / 100
        console.log(`El total es ${total}`);
    }
}

var myShoppingCart = new shoppingCart()

//FUNCION DEL BOTON
function btnFunction(event){

    cafeteria.forEach((product) => {
      if(product.id === event.target.dataset.id) {
        myShoppingCart.addProduct(product);
        console.log(product.name, product.price);
      }
    });
    panaderia.forEach((product) => {
      if(product.id === event.target.dataset.id) {
        myShoppingCart.addProduct(product);
        console.log(product.name, product.price);
      }
    });
    pasteleria.forEach((product) => {
      if(product.id === event.target.dataset.id) {
        myShoppingCart.addProduct(product);
        console.log(product.name, product.price);
      }
    });

    console.log(myShoppingCart.getTotal())
  }
