document.addEventListener("DOMContentLoaded", function(event) {

    const productContainerPasteleria = document.getElementsByClassName("pasteleria__row")

    pasteleria.forEach(function(product){
        const cardPasteleria = buildProductCard(pasteleria);
        productContainerPasteleria.innerHTML += card;
  });

  const productContainerPanaderia = document.getElementsByClassName("panaderia__row")

    panaderia.forEach(function(product){
        const cardPanaderia = buildProductCard(panaderia);
            productContainerPanaderia.innerHTML += card;
  });

  const productContainerCafeteria = document.getElementsByClassName("cafeteria__row")

  cafeteria.forEach(function(product){
      const cardCafeteria = buildProductCard(pasteleria);
      productContainerCafeteria.innerHTML += card;
});

})