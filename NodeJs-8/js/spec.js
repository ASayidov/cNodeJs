const tbody = document.querySelector("tbody");
const inputs = document.querySelectorAll("#form [name]");
const form = document.getElementById("form");
const modal = new bootstrap.Modal("#departModal", {
  keyboard: false,
});

let toggle = true;
let _id; //temp

let specs = [];
let spec = {};
const render = () => {
  tbody.innerHTML = "";
  specs.forEach((el, i) => {
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
            <td class="text-end ">
                <button class="btn btn-info" onclick="getDep('${
                  el._id
                }')"><i class="bi bi-pencil"></i>
                </button>
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
  specs = [...res.data];
  render();
});

const delDep = (id) => {
  if (confirm("Qaroringiz qat'iymi?")) {
    axios.delete(`${url}/spec/${id}`, header).then((res) => {
      console.log(res.data);
      specs = specs.filter((dep) => dep._id !== id);
      render();
      info.innerHTML = `
      <div class="alert alert-warning" role="alert">Mutaxasislik o'chirildi</div>`;
      setTimeout(() => {
        info.innerHTML = "";
      }, 2000);
    });
  }
};

const addDepart = (e) => {
  e.preventDefault();

  let data = new FormData(e.target);
  data.forEach((value, name) => (spec[name] = value));

  if (toggle) {
    axios.post(`${url}/spec`, spec, header).then((res) => {
      info.innerHTML = `
      <div class="alert alert-success" role="alert">Yangi mutaxasislik qo'shildi</div>`;
      setTimeout(() => {
        info.innerHTML = "";
      }, 2000);
      specs = [res.data, ...specs];
      form.reset();
      render();
    });
  } else {
    saveDep(spec);
  }
};

const getDep = (id) => {
  //edit ni bosilganda inputiga bosilgan itemni ma'lumotini olib kelib olish
  axios.get(`${url}/spec/${id}`, header).then((res) => {
    _id = id;
    inputs.forEach((itemInput) => {
      itemInput.value = res.data[itemInput.getAttribute("name")];
    });

    toggle = false;
    for (const key in res.data) {
      //console.log(key, res.data[key]);
    }
    modal.show();
  });
};

const saveDep = (depValue) => {
  axios.put(`${url}/spec`, { ...depValue, _id }, header).then((res) => {
    //_id: _id холати битта килиб ёзилди биз саклаган ва бекэндники
    info.innerHTML = `
    <div class="alert alert-success" role="alert">Mutaxasislik yangilandi</div>`;
    setTimeout(() => {
      info.innerHTML = "";
    }, 2000);
    specs = specs.map((dep) => {
      if (dep._id == _id) return { ...res.data };
      return dep;
    });
    _id = null;
    toggle = true;
    form.reset();
    render();
  });
};

const statDep = (id) => {
  axios.get(`${url}/spec/change/${id}`, header).then((res) => {
    console.log(res.data);
    specs = specs.map((dep) => {
      if (dep._id == res.data._id) return { ...res.data };
      return dep;
    });
    render();
  });
};
