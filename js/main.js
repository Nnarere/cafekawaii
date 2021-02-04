$ ( document ).ready(function(){

    //LLAMO A LOS PRODUCTOS Y LOS INCORPORO EN EL HTML

    const productContainerPasteleria = $("#pasteleria__row")[0] //document.getElementById("pasteleria__row")

        pasteleria.forEach(function(product){
        if(product.avaliable){
                const cardPasteleria = buildProductCard(product);
                productContainerPasteleria.innerHTML += cardPasteleria;
            }
    });

    const productContainerPanaderia = $("#panaderia__row")[0]

        panaderia.forEach(function(product){
        if(product.avaliable){
            const cardPanaderia = buildProductCard(product);
                productContainerPanaderia.innerHTML += cardPanaderia;
            }
    });

    const productContainerCafeteria = $("#cafeteria__row")[0]

        cafeteria.forEach(function(product){
        if(product.avaliable){
            const cardCafeteria = buildProductCard(product);
            productContainerCafeteria.innerHTML += cardCafeteria;
            }
        });
        localStorage.getItem("total", myShoppingCart)
});
$(".subtitulo").hover( function() {
    $(this).css("color", "#45005F")
})