const in1 = document.getElementById("in1");
const btnAdd = document.getElementById("btnAdd");
const textArea = document.querySelector(".textarea");

// const sendValue = (count = 10) => {
//   for (let i = 0; i < count; i++) {
//     textArea.innerHTML += `<p>${in1.value}</p>`;
//   }
//   in1.value = "";
// };

// btnAdd.addEventListener("click", () => sendValue());
//-----------------------------------------------------------------------

// const sendValue = () => {
//   textArea.innerHTML = `
//  <table width="50%" border="1">
//   <thead>
//     <tr>
//       <th>Son</th>
//       <th>Kvadrat</th>
//     </tr>
//   </thead>
//   <tbody class="tbodyT2"></tbody>
// </table>`;
//   const tbodyT2 = document.querySelector(".tbodyT2");
//   let val = in1.value;
//   for (let i = 1; i <= val; i++) {
//     tbodyT2.innerHTML += `<tr>
//       <td>${i}</td>
//       <td>${Math.pow(i, 2)}</td>
//       </tr>`;
//   }

//   in1.value = "";
// };

// btnAdd.addEventListener("click", () => sendValue());

//------------------------------------------------------------------------------

// const sendValue = () => {
//   textArea.innerHTML = `
//  <table width="50%" border="1">
//   <thead>
//     <tr>
//       <th>Son</th>
//       <th>Kvadrat</th>
//     </tr>
//   </thead>
//   <tbody class="tbodyT2"></tbody>
// </table>`;
//   const tbodyT2 = document.querySelector(".tbodyT2");
//   let val = in1.value;
//   for (let i = 2; i <= val; i+=2) {
//     tbodyT2.innerHTML += `<tr>
//       <td>${i}</td>
//       <td>${Math.pow(i, 2)}</td>
//       </tr>`;
//   }

//   in1.value = "";
// };

// btnAdd.addEventListener("click", () => sendValue());
//--------------------------------------------------------------------------------

// const sendValue = () => {
//   let T = 0.5;
//   let g = 9.8;
//   // let N = 3;
//   textArea.innerHTML = `
//  <table width="50%" border="1">
//   <thead>
//     <tr>
//       <th>Vaqt</th>
//       <th>Tezlik</th>
//     </tr>
//   </thead>
//   <tbody class="tbodyT2"></tbody>
// </table>`;
//   const tbodyT2 = document.querySelector(".tbodyT2");
//   let val = in1.value;
//   for (let i = 0; i <= val; i += T) {
//     tbodyT2.innerHTML += `<tr>
//       <td>${i}</td>
//       <td>${(v = i * g).toFixed(2)}</td>
//       </tr>`;
//   }

//   in1.value = "";
// };

// btnAdd.addEventListener("click", () => sendValue());

//-----------------------------------------------------------------------------------
//№5
// const sendValue = () => {
//   let N = in1.value;
//   let sum = 0;
//   for (let i = 0; i < N; i++) {
//     textArea.innerHTML += `<p>${(sum += i)}</p>`;
//   }

//   in1.value = "";
// };

// btnAdd.addEventListener("click", () => sendValue());

//------------------------------------------------------------------------------------
//№6
// const sendValue = (N) => {
//   let sum = 0;
//   for (let i = 2; i < N; i += 2) {
//     textArea.innerHTML += `<p>${(sum += i)}</p>`;
//   }

//   in1.value = "";
// };

// btnAdd.addEventListener("click", () => sendValue(in1.value));
//------------------------------------------------------------------------------------
//№7
// const sendValue = (N) => {
//   let kupaytma = 1;
//   for (let i = 2; i <= N; i++) {
//     textArea.innerHTML += `<p>${(kupaytma *= i)}</p>`;
//   }

//   in1.value = "";
// };

// btnAdd.addEventListener("click", () => sendValue(in1.value));

//--------------------------------------------------------------------------------------
//№8
// const sendValue = () => {
//   let priceKg = 25000;
//   let priceGm = priceKg / 1000;

//   for (let i = 100; i <= 1000; i += 100) {
//     textArea.innerHTML += `<p>${(i, i * priceGm)}</p>`;
//   }

//   in1.value = "";
// };

// btnAdd.addEventListener("click", () => sendValue());
//----------------------------------------------------------------------------------------
//#9
// const sendValue = () => {

//   for (let i = 2; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//       textArea.innerHTML += `<p>${i}*${j}=${i * j}</p>`;
//     }
//   }

//   in1.value = "";
// };

// btnAdd.addEventListener("click", () => sendValue());

//---------------------------------------------------------------------------------------
