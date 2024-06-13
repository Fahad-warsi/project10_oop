#! /usr/bin/env node
import inquirer from "inquirer";
class Person {
  Personality: string;

  constructor() {
    this.Personality = "Mystery";
  }

  askQuestion(answer: number) {
    if (answer == 1) {
      this.Personality = "Extravert";
    } else if (answer == 2) {
      this.Personality = "Introvert";
    } else {
      this.Personality = "You are still Mystery";
    }
  }

  getPersonality() {
    return this.Personality;
  }
}

class Student extends Person {
  name: string;

  constructor() {
    super();
    this.name = "New Student";
  }
  setName(Name_std: string) {
    this.name = Name_std;
  }
  getName() {
    console.log("My Name is : ", this.name);
  }
}

async function main() {
  let Answer = await inquirer.prompt([
    {
      name: "personType",
      type: "number",
      message:
        "Type 1, if you would like to talk others, and Type 2, If you would rather keep to yourself.",
    },
  ]);

  let myPerson = new Person();
  myPerson.askQuestion(Answer.personType);
  console.log(`You are : ${myPerson.getPersonality()}`);

  let stdName = await inquirer.prompt([
    {
      name: "std_Name",
      type: "input",
      message: "Please Enter your Name : ",
    },
  ]);
  let mystudent = new Student();
  mystudent.setName(stdName.std_Name);
  console.log(
    `Your name is : ${
      mystudent.name
    } and Your personlity is : ${mystudent.getPersonality()}`
  );
}

main();
