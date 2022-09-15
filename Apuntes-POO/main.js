class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }
    publicar(){
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}


class Course {
    constructor({
        name,
        lessons = [],
        isFree = false,
        lang = "ES",
    })
    {
        this._name = name;
        this.lessons = lessons;
        this.isFree = isFree;
        this.lang = lang;
    }
    get name() {
        return this._name;
    }
    set name(nuevoNombre) {
        if (nuevoNombre === "Mal curso") {
            console.warn("NOO!")
        } else {
            this._name = nuevoNombre;
        }        
    }
}
const cursoProgBasica = new Course({
    name: "Programacion Basica",
    isFree: true,
});
const cursoPOO = new Course({
    name: "POO",
});
const cursoJS = new Course({
    name: "JavaScript",
    lang: "EN"
});


class LearningPaths {
    constructor({
        name,
        courses = [],
    })
    {
        this.name = name;
        this.courses = courses;
    }
    addCourse(course){
        this.course.push(course)
    }
}
const escuelaWeb = new LearningPaths({
    name: "Escuela de desarrollo web",
    courses: [
        "Mobile First",
        "CSS Grid",
    ]
});
const escuelaDS = new LearningPaths({
    name: "Escuela de DataScience",
    courses: [
        "Python",
        "DataBusiness",
    ]
});
const escuelaVgs = new LearningPaths({
    name: "Escuela de VideoGames",
    courses: [
        "C++ Basico",
        "Unreal Engine",
    ]
});


class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        linkedin = undefined,
        github = undefined,
        approvedCouerses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            linkedin,
            github,
        };
        this.approvedCouerses = approvedCouerses;
        this.learningPaths = learningPaths;
    }
    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        })
        comment.publicar();
    }
}

class FreeStudent extends Student{
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCouerses.push(newCourse);
        } else {
            console.warn("No puedes tomar este curso")
        }
    }
}

class BasicStudent extends Student{
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        if (newCourse.lang !== "EN") {
            this.approvedCouerses.push(newCourse);
        } else {
            console.warn("No puedes tomar este curso")
        }
    }
}

class ExpertStudent extends Student{
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        this.approvedCouerses.push(newCourse);
    }
}

class TeacherStudent extends Student{
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        this.approvedCouerses.push(newCourse);
    }
    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor"
        })
        comment.publicar();
    }
}

const danielvera = new BasicStudent({
    name: "Daniel",
    username: "dveraacero",
    email: "d.vera.acero@gmail.com",
    twitter: "d.vera.acero",    
    learningPaths: [
        escuelaVgs,
        escuelaDS,
    ]
})

const paula = new FreeStudent({
    name: "Paula",
    username: "Paula1102",
    email: "Paula1102@gmail.com",
    linkedin: "Paula1102",    
    learningPaths: [
        escuelaWeb
    ]
})

const freddy = new TeacherStudent({
    name: "Freddy",
    username: "freddier",
    email: "freddier@gmail.com",
    linkedin: "freddier",
})