$ ( document ).ready(function(){

    //LLAMO A LOS PRODUCTOS Y LOS INCORPORO EN EL HTML

    const productContainerPasteleria = document.getElementById("pasteleria__row")

        pasteleria.forEach(function(product){
        if(product.avaliable){
                const cardPasteleria = buildProductCard(product);
                productContainerPasteleria.innerHTML += cardPasteleria;
            }
    });

    const productContainerPanaderia = document.getElementById("panaderia__row")

        panaderia.forEach(function(product){
        if(product.avaliable){
            const cardPanaderia = buildProductCard(product);
                productContainerPanaderia.innerHTML += cardPanaderia;
            }
    });

    const productContainerCafeteria = document.getElementById("cafeteria__row")

        cafeteria.forEach(function(product){
        if(product.avaliable){
            const cardCafeteria = buildProductCard(product);
            productContainerCafeteria.innerHTML += cardCafeteria;
            }
        });
        localStorage.getItem("total", myShoppingCart)
});
$(".pasteleria__card").css("margin-bottom", "40px");