//hw
// vazifa
// - texnika mahsulotlarni qo'shish va o'qish.
// - maydonlar: mahsulot nomi, turi, narhi, skidka, umumiy narhi

const inputs = document.querySelectorAll("#form [name]");
const url = "http://localhost:3000/technicals";

const addTech = () => {
  const tech = {};

  console.log(tech);
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
    .then((newTech) => console.log(newTech));
};
