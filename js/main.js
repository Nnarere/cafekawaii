/*class NuevosProductos () {
    constructor() {}
    }*/

function ProductConstructor(id, name, description, price) {
    this.id = id;
    this.name = name;
    this.description= description;
    this.price = price;
}
var tartaDeFresas = new ProductConstructor(1, "tarta de fresas", "rica tarta", 3000);

console.log(ProductConstructor)