//hw
// vazifa
// - texnika mahsulotlarni qo'shish va o'qish.
// - maydonlar: mahsulot nomi, turi, narhi, skidka, umumiy narhi

const tbody = document.querySelector("tbody");

const inputs = document.querySelectorAll("#form [name]");
const url = "http://localhost:3000/technicals";
let techs = [];

const render = () => {
  tbody.innerHTML;
  techs.forEach((item, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.fname}</td>
        <td>${item.year}</td>
        <td>${item.price}</td>
        <td>${item.discount}</td>
        <td>${item.totalPrice}</td>
        <td>${item.techType}</td>
      </tr>
    `;
  });
};

fetch(`${url}?_sort=id&_order=desc`)
  .then((resp) => resp.json())
  .then((res) => {
    techs = [...res];
    render();
  });

const addTech = () => {
  const tech = {};

  inputs.forEach((e) => {
    tech[e.getAttribute("name")] = e.value;
  });

  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(tech),
  })
    .then((res) => res.json())
    .then((newTech) => {
      techs = [newTech, ...techs];
      render();
    });
};
