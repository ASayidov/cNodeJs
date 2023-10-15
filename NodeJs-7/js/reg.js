const register = (e) => {
  e.preventDefault();
  let form = e.target;
  let data = new FormData(form);
  data.forEach((value, name) => console.log(value, name));
};
