// CODE here for your Lambda Classes
class Person{
    constructor(person){
        this.newName = person.name;
        this.newAge = person.age;
        this.newLocation = person.location;
    }
    speak(){
        return console.log(`Hello my name is ${this.newName}, I am from ${this.newLocation}`);
    }
}

class Instructor extends Person{
    constructor(instructor){
        super(instructor);
        this.newSpecialty = instructor.specialty;
        this.newFavLanguage = instructor.favLanguage;
        this.newCatchPhrase = instructor.catchPhrase;
    }
    demo(subject){
        return console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        return console.log(`${student.newName} receives a perfect score on ${subject}`);
    }
}

class Student extends Person{
    constructor(student){
        super(student);
        this.newPreviousBackground = student.previousBackground;
        this.newClassName = student.className;
        this.newFavSubjects = student.favSubjects;
    }
    listsSubjects(){
        console.log(this.newFavSubjects.toString());
    }
    PRAssignment(subject){
        return console.log(`${this.newName} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        return console.log(`${this.newName} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor{
    constructor(projectmanager){
        super(projectmanager);
        this.newGradClassName = projectmanager.gradClassName;
        this.newFavInstructor = projectmanager.favInstructor;
    }
    standUp(channel){
        return console.log(`${this.newName} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        return console.log(`${this.newName} debugs ${student.newName}'s code on ${subject}`);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const richard = new Instructor({
    name: 'Richard',
    location: 'Little Rock',
    age: 33,
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Be there or be square`
  });

const matt = new Student({
    name: 'Matt',
    location: 'Santa Barbara',
    age: 27,
    previousBackground: 'Welder',
    className: 'WEB25',
    favSubjects: ['Python', 'React', 'Javascript']
});

const joey = new Student({
    name: 'Joey',
    location: 'Portland',
    age: 25,
    previousBackground: 'Information Technology',
    className: 'WEB25',
    favSubjects: ['HTML', 'CSS', 'Javascript']
});

const drew = new ProjectManager({
    name: 'Drew',
    location: 'Scotts Valley',
    age: 30,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `When life gives you lemons, make lemonade`,
    gradClassName: 'WEB13',
    favInstructor: 'Britt'
});

const nick = new ProjectManager({
    name: 'Nick',
    location: 'Seattle',
    age: 36,
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `Don't get ahead of yourself`,
    gradClassName: 'WEB15',
    favInstructor: 'Britt'
});

nick.speak();
fred.demo("React");
richard.grade(joey, "HTML");
matt.listsSubjects();
matt.PRAssignment("React");
joey.sprintChallenge("Python");
drew.standUp("#web25");
nick.debugsCode(joey, "CSS")
