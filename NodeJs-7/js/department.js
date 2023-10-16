const tbody = document.querySelector("tbody");
const render = () => {
  tbody.innerHTML = "";
  
};

const addDepart = (e) => {
  e.preventDefault();

  let form = e.target;
  let data = new FormData(form);
  let department = {};
  data.forEach((value, name) => (department[name] = value));
  console.log(department);
};
