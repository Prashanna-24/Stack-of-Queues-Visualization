"use strict";
let push = document.querySelector(".push");
var pop = document.querySelector(".p");
let n = Number(window.prompt("enter the number of queues"));
// console.log(Number(q));
let N = Number(20 / n);
alert(`there will be ${n} queues of size ${N}`);

let b = [
  "#c1",
  "#c2",
  "#c3",
  "#c4",
  "#c5",
  "#c6",
  "#c7",
  "#c8",
  "#c9",
  "#c10",
  "#c11",
  "#c12",
  "#c13",
  "#c14",
  "#c15",
  "#c16",
  "#c17",
  "#c18",
  "#c19",
  "#c20",
];

let a = [
  ".td20",
  ".td19",
  ".td18",
  ".td17",
  ".td16",
  ".td15",
  ".td14",
  ".td13",
  ".td12",
  ".td11",
  ".td10",
  ".td9",
  ".td8",
  ".td7",
  ".td6",
  ".td5",
  ".td4",
  ".td3",
  ".td2",
  ".td1",
];

//function for queses
let value;
let rear;
let front;
let q;
let fronts = [];
let rears = [];
// for (let i = 0; i < N; i++) {
//   rears[i] = 0;
//   fronts[i] = 0;
// }
let currentq = [];
for (let i = 1; i <= N; i++) {
  rears[0] = 0;
  rears[i] = rears[i - 1] + N;
}

for (let i = 1; i <= N; i++) {
  fronts[0] = 0;
  fronts[i] = fronts[i - 1] + N;
}
function isempty() {
  for (let j = 0; j < a + 1; j++) {
    if (fronts[j] === rears[j]) {
      return 0;
    }
  }
  return 1;
}
function enqueue(rear) {
  // if (front - rear == N) alert("full");
  let number = Number(document.querySelector(".number").value);
  document.querySelector(a[rear]).textContent = number;
  // rear--;
}
function dequeue(front) {
  // if (front == rear) alert("empty");
  for (let x of b) {
    document.querySelector(x).src = "chest.png";
  }
  let box = document.querySelector(b[20 - front]);
  document.querySelector(a[front - 1]).textContent = "*";

  box.src = "chest-minecraft.gif";
}
let J = 0;
let j = 0;
let m;
push.addEventListener("click", function () {
  q = Number(document.querySelector(".numbe").value);
  rears[q] = rears[q] - 1;

  if (fronts[q] - rears[q] === N + 1) alert("your queue is full !!!!!");
  for (let j = 1; j < q; j++) {
    if (fronts[j] === rears[j]) {
      alert("stack of queues constraint : lower  queues are still not filled");
      location.reload();
    }
  }

  enqueue(rears[q]);
});
pop.addEventListener("click", function () {
  q = Number(document.querySelector(".numbe").value);

  console.log(front);
  if (fronts[q] == rears[q]) alert("your queue is empty !!!!!");
  if (q !== 1) {
    for (let j = q+1; j <= n; j++) {
      if (fronts[j] - rears[j] === N) {
        alert("stack of queues constraint : top queues are full");
        // location.reload();
      }
    }
  }
  dequeue(fronts[q]);
  fronts[q] = fronts[q] - 1;
});

// "use strict";
// let push = document.querySelector(".push");
// var pop = document.querySelector(".p");
// let n = Number(window.prompt("enter the number of queues"));
// // console.log(Number(q));
// let N = Number(20 / n);
// alert(`there will be ${n} queues of size ${N}`);

// let b = [
//   "#c1",
//   "#c2",
//   "#c3",
//   "#c4",
//   "#c5",
//   "#c6",
//   "#c7",
//   "#c8",
//   "#c9",
//   "#c10",
//   "#c11",
//   "#c12",
//   "#c13",
//   "#c14",
//   "#c15",
//   "#c16",
//   "#c17",
//   "#c18",
//   "#c19",
//   "#c20",
// ];

// let a = [
//   ".td20",
//   ".td19",
//   ".td18",
//   ".td17",
//   ".td16",
//   ".td15",
//   ".td14",
//   ".td13",
//   ".td12",
//   ".td11",
//   ".td10",
//   ".td9",
//   ".td8",
//   ".td7",
//   ".td6",
//   ".td5",
//   ".td4",
//   ".td3",
//   ".td2",
//   ".td1",
// ];

// //function for queses
// let value;
// let rear;
// let front;
// let q;
// let fronts = [];
// let rears = [];
// // for (let i = 0; i < N; i++) {
// //   rears[i] = 0;
// //   fronts[i] = 0;
// // }
// let currentq = [];
// for (let i = 1; i <= N; i++) {
//   rears[0] = 0;
//   rears[i] = rears[i - 1] + N;
// }

// for (let i = 1; i <= N; i++) {
//   fronts[0] = 0;
//   fronts[i] = fronts[i - 1] + N;
// }
// function isempty() {
//   for (let j = 0; j < a + 1; j++) {
//     if (fronts[j] === rears[j]) {
//       return 0;
//     }
//   }
//   return 1;
// }
// function enqueue(rear) {
//   // if (front - rear == N) alert("full");
//   let number = Number(document.querySelector(".number").value);
//   document.querySelector(a[rear]).textContent = number;
//   // rear--;
// }
// function dequeue(front) {
//   // if (front == rear) alert("empty");
//   for (let x of b) {
//     document.querySelector(x).src = "chest.png";
//   }

//   document.querySelector(a[front]).textContent = "*";
//   let box = document.querySelector(b[19 - front]);
//   // front++;
//   box.src = "chest-minecraft.gif";
// }
// let J = 0;
// let j = 0;
// let m;
// push.addEventListener("click", function () {
//   q = Number(document.querySelector(".numbe").value);
//   rears[q] = rears[q] - 1;

//   if (fronts[q] - rears[q] === N)
//     alert("with this push your queue is full !!!!!");
//   for (let j = 1; j < q; j++) {
//     if (fronts[j] === rears[j]) {
//       alert("stack of queues constraint : lower  queues are still not filled");
//       window.location.reload();
//     }
//   }

//   enqueue(rears[q]);
// });
// pop.addEventListener("click", function () {
//   q = Number(document.querySelector(".numbe").value);

//   console.log(front);
//   if (fronts[q] == rears[q]) alert("with this pop your queue is empty !!!!!");
//   if (q !== 1) {
//     for (let j = q; j <= n; j++) {
//       if (fronts[j] - rears[j] === N) {
//         alert("stack of queues constraint : top queues are full");
//         window.location.reload();
//       }
//     }
//   }
//   dequeue(fronts[q]);
//   fronts[q] = fronts[q] - 1;
// });