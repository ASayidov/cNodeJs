const tbody = document.querySelector("tbody");

let departments = [];
let department = {};
const render = () => {
  tbody.innerHTML = "";
  departments.forEach((el, i) => {
    tbody.innerHTML += `
        <tr>
            <th scope="row">${i + 1}</th>
            <td>${el.title}</td>
            <td>${convertDate(el.createdTime)}</td>
            <td>
            <button  class="btn btn-${
              el.status == 1 ? "success" : "warning"
            }" onclick="statDep('${el._id}')"><i class="bi bi-${
      el.status == 1 ? "check" : "x"
    }"></i>
            </button>
            </td>
            <td>
                <button class="btn btn-info" onclick="editDep('${
                  el._id
                }')"><i class="bi bi-pencil"></i>
                </button>
            </td>
              <td>
                <button  class="btn btn-danger" onclick="delDep('${
                  el._id
                }')"><i class="bi bi-trash"></i>
                </button>
              </td>
          </tr>
    `;
  });
};

axios.get(`${url}/spec`, header).then((res) => {
  departments = [...res.data];
  render();
});

const delDep = (id) => {
  if (confirm("Qaroringiz qat'iymi?")) {
    axios.delete(`${url}/spec/${id}`, header).then((res) => {
      console.log(res.data);
      departments = departments.filter((dep) => dep._id !== id);
      render();
      info.innerHTML = `
      <div class="alert alert-warning" role="alert">Bo'lim o'chirildi</div>`;
      setTimeout(() => {
        info.innerHTML = "";
      }, 2000);
    });
  }
};

const addSpec = (e) => {
  e.preventDefault();

  let form = e.target;
  let data = new FormData(form);

  data.forEach((value, name) => (department[name] = value));
  console.log(department);

  axios.post(`${url}/spec`, department, header).then((res) => {
    info.innerHTML = `
    <div class="alert alert-success" role="alert">Yangi bo'lim qo'shildi</div>`;
    setTimeout(() => {
      info.innerHTML = "";
    }, 2000);
    departments = [res.data, ...departments];
    form.reset();
    render();
  });
};

const statSpec = (id) => {
  axios.get(`${url}/spec/change/${id}`, header).then((res) => {
    console.log(res.data);
    departments = departments.map((dep) => {
      if (dep._id == res.data._id) return { ...res.data };
      return dep;
    });
    render();
  });
};
