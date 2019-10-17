// CODE here for your Lambda Classes
class Person {
    constructor(att){
        this.name = att.name,
        this.age = att.age,
        this.location = att.location
    }
    speak(){
        return `Hello my name is ${this.name}, and I am from ${this.location}.`
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
        return `${student.name} receives a perfect score on ${this.subject}`
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
        return LISTSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
    }
    PRAssignment(){
        return `${student.name} has submitted a PR for ${this.subject}`
    }
    sprintChallenge(){
        return `${student.name} has begun sprint challenge on ${this.subject}`
    }
}

