const tbody = document.querySelector("tbody");
let departments = [];
const render = () => {
  tbody.innerHTML = "";
  departments.forEach((el, i) => {
    tbody.innerHTML += `
        <tr>
            <th scope="row">${i + 1}</th>
            <td>${el.title}</td>
            <td>${el.createdTime}</td>
            <td>${el.status}</td>
            <td><button class="btn btn-info" onclick="editDep(${
              el.id
            })"><i class="bi bi-pencil"></i></button></td>
              <td><button  class="btn btn-danger" onclick="delDep(${
                el.id
              })"><i class="bi bi-trash"></i></button></td>
          </tr>
    `;
  });
};

axios.get(`${url}/department`, header).then((res) => {
  departments = [...res.data];
  render();
});

const addDepart = (e) => {
  e.preventDefault();

  let form = e.target;
  let data = new FormData(form);
  let department = {};
  data.forEach((value, name) => (department[name] = value));
  console.log(department);

  axios.post(`${url}/department`, department, header).then((res) => {
    departments = [res.data, ...departments];
    form.reset();
    render();
  });
};
