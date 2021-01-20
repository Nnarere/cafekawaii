const domBuilder = new buildProductCard()

document.addEventListener("DOMContentLoaded", function(event) {

    const productContainerPasteleria = document.getElementsByClassName("pasteleria__row")

    pasteleria.forEach(function(product){
        if(product.avaliable){
            const cardPasteleria = buildProductCard(pasteleria);
            productContainerPasteleria.innerHTML += card;
        }
  });

  const productContainerPanaderia = document.getElementsByClassName("panaderia__row")

    panaderia.forEach(function(product){
        if(product.avaliable){
        const cardPanaderia = buildProductCard(panaderia);
            productContainerPanaderia.innerHTML += card;
        }
  });

  const productContainerCafeteria = document.getElementsByClassName("cafeteria__row")

  cafeteria.forEach(function(product){
    if(product.avaliable){
      const cardCafeteria = buildProductCard(pasteleria);
      productContainerCafeteria.innerHTML += card;
    }
});

})