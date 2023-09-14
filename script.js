function hello(...params) {
  //rest
  //   console.log(params);
  [name, age, email, hobbies] = params;
  if (age > 0 && age < 120) {
    document.write(`<h2>Welcome ${name}</h2>`);
  } else {
    document.write(`<h2>Invalid Age</h2>`);
  }

  document.write(`<ul>`);
  hobbies.map((e, i, a) => {
    document.write(`<li>${e}</li>`);
  });
  document.write(`</ul>`);
}

hello("Ramesh", 40, "ramesh@gmail.com", ["music", "art"]);

// (arrow)

// ((name, age, email) => {
//   if (age > 0 && age < 120) {
//     document.write(`<h2>Welcome ${name}</h2>`);
//   } else {
//     document.write(`<h2>Invalid Age</h2>`);
//   }
// })("Ramesh", 40, "");

// hello("Ramesh", 40, "");

var student = {
  name: "Gopal",
  email: "gopal@gmail.com",
  age: 30,
  hobbies: ["music", "painintg", "gardening"],
};
// key-value pairs

// student.prototype.displayInfo = () => {
//   document.write(
//     `Name : ${name} <br/> Email : ${email} <br/> Age : ${age} <br/> Hobbies : ${hobbies}`
//   );
// };

// student.displayInfo();

// destructuring

var { name, email } = student;

console.log(name, email);

var colors = ["white", "red", "orange"];
var extraColors = [...colors, "green"]; //spread

console.log(extraColors);

// var [white, red, orange] = colors;

// console.log(white, orange);
