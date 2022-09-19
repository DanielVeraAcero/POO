class Producto {
    static contadorProductos = 0;
    constructor({
        name,
        price,
    })
    {
        Producto.contadorProductos += 1;
        this._idProducto = Producto.contadorProductos
        this._name = name;
        this._price = price;
    }
    get idProducto() {
        return this._idProducto
    }
    get name() {
        return this._name
    }
    set name(name) {
        this._name = name
    }
    get price() {
        return this._price
    }
    set price(price) {
        this._price = price
    }
    get toString() {
        return `Item #${this.idProducto}: ${this.name} / $${this.price} USD`
    }
}

class Orden {
    static contadorOrdenes = 0;
    static get maxProductos() {
        return 5
    }
    constructor() 
    {
        Orden.contadorOrdenes += 1;
        this.idOrden = Orden.contadorOrdenes;
        this.productos = [];
    }
    agregarProducto(product) {
        if (this.productos.length < Orden.maxProductos) {
            this.productos.push(product);
        } else {
            console.log("Por favor cree otra orden");
        }        
    }
    calcularTotal() {
        let total = this.productos.reduce((acc,item) => acc += item.price, 0)
        return total
    }
}

const product1 = new Producto({
    name: 'Nintendo',
    price: 300,
});
console.log(product1);
console.log(product1.toString);

const product2 = new Producto({
    name: 'PS5',
    price: 350,
});
console.log(product2);
console.log(product2.toString);

const product3 = new Producto({
    name: 'XBOX',
    price: 250,
});
console.log(product3);
console.log(product3.toString);

const orden1 = new Orden({});
orden1.agregarProducto(product1)
orden1.agregarProducto(product2)
orden1.agregarProducto(product3)
orden1.agregarProducto(product2)
orden1.agregarProducto(product3)
console.log(orden1);
console.log(orden1.calcularTotal());
