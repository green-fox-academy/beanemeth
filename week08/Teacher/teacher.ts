/*Create Student and Teacher classes
Student
learn() -> prints: the student is actually learning
question(teacher) -> calls the teacher's giveAnswer() method
Teacher
teach(student) -> calls the student's learn() method
giveAnswer() -> prints: the teacher is answering a question
Instantiate a Student and Teacher object
Call the student's question() method and the teacher's teach() method*/

export class Teacher {

    constructor() {

    }
    //teach(student) -> calls the student's learn() method
    teach(student: Student) { student.learn() }
    //giveAnswer() -> prints: the teacher is answering a question
    giveAnswer() { console.log('the teacher is answering a question') }
}

export class Student {

    constructor() {

    }

    //learn() -> prints: the student is actually learning
    learn() {
         console.log('the student is actually learning') 
        }
    //question(teacher) -> calls the teacher's giveAnswer() method
    question(teacher: Teacher) { 
        teacher.giveAnswer() 
    }

}

//Call the student's question() method and the teacher's teach() method

let tomi = new Student();
let marikaNeni = new Teacher();
tomi.question(marikaNeni)