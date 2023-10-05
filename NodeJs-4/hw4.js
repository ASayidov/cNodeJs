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

// 2.Jadvalda berilgan N sonigacha bo'lgan sonlarni kvadratini chiqaring
// var N = 8
// -----------------------------------
// Son                   Kvadrat
// -----------------------------------
// 1                            1
// 2                            4
// 3                            9
// 4                           16
// 5                           25
// 6                           36
// 7                           49
// 8                           64

// let N = 8;
// for (let i = 1; i <= N; i++) {
//   console.log(i, Math.pow(i, 2));
// }
