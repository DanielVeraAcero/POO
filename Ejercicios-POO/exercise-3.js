class Orden{
    static contadorOrdenes = 0;
    constructor()
    {
        Orden.contadorOrdenes += 1;
        this.idOrden = Orden.contadorOrdenes;
        this.computadoras = [];        
    }
    agregarComputadora(computadora) {
        this.computadoras.push(computadora)
    }
}
class Computadora{
    static contadorComputadoras = 0;
    constructor({
        name,
        monitor,
        teclado,
        mouse,
    }) 
    {
        Computadora.contadorComputadoras += 1;
        this.idComputadora = Computadora.contadorComputadoras;
        this.name = name;
        this.monitor = monitor;
        this.teclado = teclado;
        this.mouse = mouse;
    }
    get toString() {
        return `PC #${this.idComputadora}: ${this.name}
        Monitor: ${this.monitor}
        Teclado: ${this.teclado}
        Mouse: ${this.mouse}`
    }
}
class Monitor{
    static contadorMonitores = 0;
    constructor({
        marca,
        tamaño,
    })
    {
        Monitor.contadorMonitores += 1;
        this.idMonitor = Monitor.contadorMonitores;
        this.marca = marca;
        this.tamaño = tamaño;
    }
    get toString(){
        return `Monitor #${this.idMonitor}: Marca: ${this.marca}, Tamaño: ${this.tamaño}`
    }
}
class DispositivoEntrada {
    constructor({
        tipoEntrada,
        marca,
    })
    {
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }
}
class Mouse extends DispositivoEntrada{
    static contadorMouse = 0;
    constructor({
        tipoEntrada,
        marca,
    }){
        super({
            tipoEntrada,
            marca,
        })
        Mouse.contadorMouse += 1;
        this.idMouse = Mouse.contadorMouse;
    }
    get toString() {
        return `Mouse #${this.idMouse}: Marca: ${this.marca}, Tipo de entrada: ${this.tipoEntrada}`
    }
}
class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;
    constructor({
        tipoEntrada,
        marca,
    }){
        super({
            tipoEntrada,
            marca,
        })
        Teclado.contadorTeclado += 1;
        this.idTeclado = Teclado.contadorTeclado;
    }
    get toString() {
        return `Teclado #${this.idTeclado}: Marca: ${this.marca}, Tipo de entrada: ${this.tipoEntrada}`
    }
}

const mouse1 = new Mouse({
    tipoEntrada: 'USB',
    marca: 'Logitech',
});
console.log(mouse1.toString);

const teclado1 = new Teclado({
    tipoEntrada: 'USB',
    marca: 'Maxell',
});
console.log(teclado1.toString);

const monitor1 = new Monitor({
    marca: "AOC",
    tamaño: "20in"
});
console.log(monitor1.toString);

const pc1 = new Computadora({
    name: "PC-Custom-1",
    monitor: monitor1,
    teclado: teclado1,
    mouse: mouse1,
});
console.log(pc1);

const orden1 = new Orden();
orden1.agregarComputadora(pc1)
console.log(orden1);