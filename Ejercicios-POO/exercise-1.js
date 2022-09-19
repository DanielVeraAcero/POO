class Persona {
    static contadorPersona = 0;
    constructor({
        name,
        lastName,
        age,
    }) 
    {
        Persona.contadorPersona += 1;
        this._idPersona = "P" + Persona.contadorPersona;
        this._name = name;
        this._lastName = lastName;
        this._age = age;
    }
    get idPersona() {
        return this._idPersona
    }
    get name() {
        return this._name
    }
    set name(name) {
        this._name = name;
    }
    get lastName() {
        return this._lastName
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
    get age() {
        return this._age
    }
    set age(age) {
        this._name = age;
    }
    get toString() {
        return `${this.idPersona}: ${this.name} ${this.lastName} de ${this.age} annios`
    }
}

class Empleado extends Persona {    
    static contadorEmpleado = 0;
    constructor({
        name,
        lastName,
        age,
        sueldo,
    }) {
        super({
            name,
            lastName,
            age,
        });
        Empleado.contadorEmpleado += 1;
        this._idEmpleado = "E" + Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }
    get idEmpleado() {
        return this._idEmpleado
    }
    get sueldo() {
        return this._sueldo
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    get toString() {
        return super.toString + ` con ID de empleado ${this.idEmpleado} tiene un sueldo de $${this.sueldo} USD`
    }
}

class Cliente extends Persona {
    static contadorCliente = 0;
    constructor({
        name,
        lastName,
        age,
    }) {
        super({
            name,
            lastName,
            age,
        });
        Cliente.contadorCliente += 1;
        this._idCliente = "C" + Cliente.contadorCliente;
        this._registerDate = new Date;
    }
    get idCliente() {
        return this._idCliente
    }
    get registerDate() {
        return this._registerDate
    }
    set registerDate(nowDate) {
        this._registerDate = nowDate
    }
    get toString() {
        return super.toString + ` con ID de cliente ${this.idCliente} fue registrado en la fecha ${this.registerDate}`
    }
}

const person1 = new Persona({
    age: 24,
    lastName: "Vera",
    name: "Daniel",
});
console.log(person1);
console.log(person1.toString);

const person2 = new Empleado({
    age: 25,
    lastName: "Guerrero",
    name: "Esteban",
    sueldo: 1000
});
console.log(person2);
console.log(person2.toString);

const person3 = new Cliente({
    age: 26,
    lastName: "Moreno",
    name: "Paula",
});
console.log(person3);
console.log(person3.toString);

const person4 = new Persona({
    age: 24,
    lastName: "Vera",
    name: "Daniel",
});
console.log(person4);
console.log(person4.toString);

const person5 = new Empleado({
    age: 25,
    lastName: "Guerrero",
    name: "Esteban",
    sueldo: 1000
});
console.log(person5);
console.log(person5.toString);

const person6 = new Cliente({
    age: 26,
    lastName: "Moreno",
    name: "Paula",
});
console.log(person6);
console.log(person6.toString);