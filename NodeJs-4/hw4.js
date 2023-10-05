const in1 = document.getElementById("in1");
const btnAdd = document.getElementById("btnAdd");
const textP = document.getElementById("textP");

const sendValue = () => {
  textP.textContent = in1.value;
  in1.value = "";
};

