interface Person {
  first: String;
  last: String;
}

class Student {
  fullname : string;
  constructor(public first, public middleinitial, public last) {
      this.fullname = first + " " + middleinitial + " " + last;
  }
}

function greeter(person: Person) {
    return "Hello, " + person.first + ' ' + person.last;
}

var user = new Student("Jane", "A", "User");
document.body.innerHTML = greeter(user);
