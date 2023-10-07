//#1

// function sendVal(n) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(Math.ceil(Math.random() * 100));
//   }
//   textArea.innerHTML = `<p>[${arr}]</p>`;
// }

// btnAdd.addEventListener("click", () => sendVal(in1.value));

//#2----------------------------------------------------------------------------------

// function sendVal(n) {
//   let arr = [];

//   for (let i = 0; i < n; i++) {
//     arr.push("#");
//   }
//   textArea.innerHTML += `<p>${arr}</p>`;
// }

// btnAdd.addEventListener("click", () => sendVal(in1.value));

//#3-------------------------------------------------------------------------------
function sendVal(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push("#");
  }
  textArea.innerHTML += `<p>${arr}</p>`;
}

btnAdd.addEventListener("click", () => sendVal(in1.value));