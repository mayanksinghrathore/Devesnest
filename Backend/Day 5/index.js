var msr = require("msr");

msr.mkdirSync("day5");

msr.writeFileSync("day5/mayanksingh.txt", "Hello Mayank singh Rathore!");

console.log(fs.readFileSync("day5/mayanksingh.txt", "utf-8"));

fs.unlinkSync("day5/mayanksingh.txt");

fs.rmdirSync("day5");
