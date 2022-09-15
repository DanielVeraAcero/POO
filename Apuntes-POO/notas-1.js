// Objeto literal
const user = {
    name: 'Daniel',
    age: 24,
    cursosAprobados: [
        "Curso definitivo de HTML & CSS",
        "Curso Practico de HTML & CSS"
    ],
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    }
};

// Se quiere aprobar otro curso
user.cursosAprobados.push("Curso de responsive design")


// Prototipo
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCurso) {
    //     this.cursosAprobados.push(nuevoCurso)
    // }
}
// Con la herramienta prototype se pueden crear metodos fuera de la funcion(prototipo)
Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso)    
}
// Para crear una instancia se usa la palabra reservada "new"
const fernando = new Student(
    'Fernando',
    28,
    [
        'CSS Grid',
        'Fundamentos de POO'
    ]
)


//Prototipos con la sintaxis de clases
class Student2{
    constructor({
        name,
        age,
        cursosAprobados = [],
        email,
    }) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.cursosAprobados = cursosAprobados;
    }
    // Dentro de la clase se pueden crear metodos
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    }
}

const paula = new Student2({
    email: 'paula1102@gmail.com',
    name: 'Paula',
    age: 26,    
});
    