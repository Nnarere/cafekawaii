/// CONSTRUCTOR DE CARRITO Y PRODUCTOS ///
function shoppingCart() {     
    this.cart = [];
    this.total = 0;
    this.discount = 0;

    this.addProduct = function(productToPush){
      if (this.cart.length > 0){
        let index = this.cart.findIndex(
          (element) => element.name === productToPush.name);
        if (index === -1){
          this.cart.push(productToPush);
        }
          else{
            this.cart[index].amount = this.cart[index].amount +1;
          }
        } else{
          this.cart.push(productToPush);
        }
          localStorage.setItem("productAdded", JSON.stringify(this.cart));
          JSON.parse(localStorage.getItem("productAdded"));
    };
    
    this.removeProduct = function(productToSplice) {
        var removeIndex = this.cart.findIndex(product => product.id === productToSplice.id);
        this.cart.splice(removeIndex, 1)
        localStorage.setItem("productRemoved", "productNameRemoved")
    }

    this.getById = function(productToFind) {
        this.cart.findIndex(function(product) {
            if(productToFind == product.name) {
                console.log('Tenés descuento')
                discount = 20;
            }
        })
    }

    this.getCartProductNames = function() {
        this.cart.forEach(function(product) {
            console.log(product.name);
        })
    }

    this.getCartUnitaryPrice = function() {
        this.cart.forEach(function(product) {
            console.log(product.price);
        })
    }

    this.getTotal = function() {
        let total=0;
        this.cart.forEach(function(product) {
            total += product.price
        })
        console.log(`El total es ${this.total}`);
    }
}

var myShoppingCart = new shoppingCart()

//FUNCION DEL BOTON
function btnFunction(event){

  myCafeteria.forEach((product) => {
      if(product.id === event.target.dataset.id) {
        myShoppingCart.addProduct(product);
        console.log(product.name, product.price)
        carritoCompras.innerHTML += buildCarrito(product);
      }
    });
  myPanaderia.forEach((product) => {
      if(product.id === event.target.dataset.id) {
        myShoppingCart.addProduct(product);
        console.log(product.name, product.price)
        carritoCompras.innerHTML += buildCarrito(product);
      }
    });
  myPasteleria.forEach((product) => {
      if(product.id === event.target.dataset.id) {
        myShoppingCart.addProduct(product);
        console.log(product.name, product.price, )
        carritoCompras.innerHTML += buildCarrito(product);
      }
    });

    console.log(myShoppingCart.getTotal())
  }

  const carritoCompras = $("#carritoDeCompras")[0]

  //NAVBAR

  let ubicacionPrincipal = window.pageYOffset;
  window.onscroll = function(){
    let desplazamiento = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamiento){
      document.getElementById("menuDeNavegacion").style.top = "0"
    }
    else{
      document.getElementById("menuDeNavegacion").style.top = "-100px"
    }

    ubicacionPrincipal = desplazamiento;
  }