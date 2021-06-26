console.log(
  "1. Create 2 object and try to use call, apply and bind on them\n\n"
);

const name1 = {
  personName: "Mr. X",
  getName: function (a) {
    console.log(this);
    console.log(a);
  },
};

const name2 = {
  personName: "Mr. Y",
};

name1.getName.call(name2, 5);
name1.getName.apply(name1, [7]);
const bindd = name1.getName.bind(name2, 9);
bindd();

let bookedSeats = 0,
  remainingSeats = 36;

document
  .querySelectorAll(
    "#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9, #box10, #box11, #box12, #box13, #box14, #box15, #box16, #box17, #box18, #box19, #box20, #box21, #box22, #box23, #box24, #box25, #box26, #box27, #box28, #box29, #box30, #box31, #box32, #box33, #box34, #box35, #box36"
  )
  .forEach((elem) => {
    elem.addEventListener("click", () => {
      if (elem.classList.contains("boxClicked")) {
        elem.classList.remove("boxClicked");
        bookedSeats--;
        remainingSeats++;
      } else {
        elem.classList.add("boxClicked");
        bookedSeats++;
        remainingSeats--;
      }
      document.querySelector(".bookedSeat").innerHTML = bookedSeats;
      document.querySelector(".remainingSeat").innerHTML = remainingSeats;
    });
  });
