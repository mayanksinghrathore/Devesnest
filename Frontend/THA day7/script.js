console.log("***Question 1***");
var student = {
  name: "Mayank Singh Rathore",
  sclass: "2nd year",
  rollno: 27,
};

console.log(student);

//2
console.log("\n***Question 2***");
console.log("Before Deleting rollno property");
console.log(student);
console.log("After Deleting rollno property");
delete student.rollno;
console.log(student);

//3
console.log("\n***Question 3***");
var student = {
  name: "Aayan Srivastava",
  sclass: "2nd year",
  rollno: 02,
};
console.log("Length is:", Object.keys(student).length);

//4
console.log("\n***Question 4***");
var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

library.map((obj) => {
  console.log(
    "-Book Name:",
    obj.title,
    "-Author Name:",
    obj.author,
    "-Reading Status:",
    obj.readingStatus
  );
});

//5
console.log("\n***Question5***");
var cylinder = new Object({
  pi: 3.1416,
  radius: 6,
  height: 9,
});

console.log(
  "Volume:",
  cylinder.pi * Math.pow(cylinder.radius, 2)*cylinder.height
);

//6
console.log("\n***Question 6***");
var library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

var temp = [];
library.map((obj) => {
  temp.push(obj.libraryID);
});
temp.sort((a, b) => b - a);
for (let i in temp) {
  library.map((obj) => {
    if (obj.libraryID === temp[i]) console.log(obj);
  });
}
