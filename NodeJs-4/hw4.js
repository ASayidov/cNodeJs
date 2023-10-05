const in1 = document.getElementById("in1");
const btnAdd = document.getElementById("btnAdd");
const textArea = document.querySelector(".textarea");

const sendValue = () => {
  let ismCount = 10;
  for (let i = 0; i < ismCount; i++) {
    textArea.innerHTML += `<p>${in1.value}</p>`;
  }
  in1.value = "";
};
