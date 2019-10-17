// CODE here for your Lambda Classes
class Person {
    constructor(att){
        this.name = att.name,
        this.age = att.age,
        this.location = att.location
    }
    speak(){
        return `Hello my name is ${this.name}, and I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(att){
        super(att);
        this.specialty = att.specialty,
        this.favLanguage = att.favLanguage,
        this.catchPhrase = att.catchPhrase
    }
    demo(){
        return `Today we are learning about ${this.subject}`;
    }
    grade(){
        return `${student.name} receives a perfect score on ${this.subject}`;
    }
}

class Student extends Person {
    constructor(att){
        super(att);
        this.previousBackground = att.previousBackground,
        this.className = att.className,
        this.favSubjects = att.favSubjects
    }
    listsSubjects(){
        this.favSubjects.forEach(function(item){
            return console.log(item);
        })
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructor {
    constructor(att){
        super(att);
        this.gradClassName = att.gradClassName,
        this.favInstructor = att.favInstructor
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const Inst1 = new Person({
    name: 'Aaron',
    age: 25,
    location: 'Anaheim',
    specialty: 'Python',
    favLanguage: 'Python',
    catchPhrase: 'Trust the Process!'
  });

const Inst2 = new Person({
    name: 'Brad',
    age: 28,
    location: 'Boston',
    specialty: 'Python',
    favLanguage: 'Python',
    catchPhrase: 'Trust the Process!'
}); 

const stu1 = new Student({
    name: 'Fred',
    age: 37,
    location: 'Bedrock',
    previousBackground: 'Sales',
    className: 'Web25',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
  });

const stu2 = new Person({
    name: 'Fred',
    age: 37,
    location: 'Bedrock',
    previousBackground: 'Sales',
    className: 'Web25',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
});

const PM1 = new Person({
    name: 'Fred',
    age: 37,
    location: 'Bedrock',
    specialty: 'Python',
    favLanguage: 'Python',
    catchPhrase: 'Trust the Process!',
    gradClassName: 'CS1',
    favInstructor: 'Brit'    
  });

const PM2 = new Person({
    name: 'Fred',
    age: 37,
    location: 'Bedrock',
    specialty: 'Python',
    favLanguage: 'Python',
    catchPhrase: 'Trust the Process!',
    gradClassName: 'CS1',
    favInstructor: 'Brit' 
});

console.log(stu1.PRAssignment('TEST'));