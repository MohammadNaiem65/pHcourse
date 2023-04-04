class CreateUser {
  name;
  email;
  age;
  constructor(name, email, age) {
    this.name = name ? name : console.error("Please enter a name.");
    this.email = email ? email : console.error("Please enter an age.");
    this.age = age ? age : parseInt(Math.random() * 100);
  }
}

let rifat = new CreateUser();
console.log(rifat);
