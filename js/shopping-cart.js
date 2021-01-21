/// CONSTRUCTOR DE CARRITO Y PRODUCTOS ///
function shoppingCart() {     
    var cart = [];
    var total = 0;
    var discount = 0;

    this.addProduct = function(productToPush) {
      cart.push(productToPush)
      localStorage.setItem("productAdded", JSON.stringify(cart));
      const carto = localStorage.getItem("selectedProduct");
      console.log(JSON.parse(carto))
      //console.log(cart)
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
        cart.forEach(function(product) {
            total += product.price
        })
        total -= total * discount / 100
        console.log(`El total es ${total}`);
    }
}

///////////////////////////////////////////////


/// NUEVAS INSTANCIAS DE CARRITO Y PRODUCTOS ///
var myShoppingCart = new shoppingCart()

/// AGREGO PRODUCTOS / SACO 1 / BUSCO SI HAY DESCUENTO / MUESTRO EL CARRITO ///
/*myShoppingCart.addProduct(cafeteria[2]);
myShoppingCart.addProduct(pasteleria[5]);
myShoppingCart.addProduct(panaderia[0]);
myShoppingCart.addProduct(cafeteria[1]);

myShoppingCart.removeProduct(cafeteria[2]);*/

myShoppingCart.getCartProductNames();
console.log();
myShoppingCart.getCartUnitaryPrice();
console.log();
myShoppingCart.getById(panaderia[0]);
myShoppingCart.getTotal();


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
  }