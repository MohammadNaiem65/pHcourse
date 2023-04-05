// JS class (a syntactic sugar) is used to create objects. It has main 4 topics.
// 1. create any variable in the normal way without keyword.
// 2. if any variable is assigned dynamically, constructor will be used. In the constructor this keyword will be used.
// 3. functions in class called in method and it is created in normal way of crating a function but function keyword will not needed.
// 4. reuse class. use extend to reuse

class CreateUser {
  name; //case 2
  email;
  age;
  isAlive = true; // case 1
  constructor(name, email, age) {
    //case 2
    this.name = name ? name : `user${parseInt(Math.random() * 10)}`;
    this.email = email ? email : console.error("Please enter an age.");
    this.age = age ? age : parseInt(Math.random() * 100);
  }

  greeting(name) {
    //case 3
    console.log(`Hello ${name}`);
  }
}



class StudentUser extends CreateUser {  // case four
  occupation;
  constructor(name, email, occupation) {
    super(name, email);
    this.occupation = occupation;
  }
}

class GovtEmployee extends CreateUser {  //  case four
  constructor(name, email, occupation) {
    super(name, email);
    this.occupation = occupation;
  }
}

let newUser = new StudentUser("rifat", "mdratahmednaiem@gmail.com", "student");
let govtEmployee = new GovtEmployee(
  "fardin",
  "mdratahmednaiem@gmail.com",
  "govtEmployee"
);
console.log(govtEmployee);
// console.log(newUser.email);
// rifat.greeting("rifat");    //case 3: to use method, use object name, not class name.
