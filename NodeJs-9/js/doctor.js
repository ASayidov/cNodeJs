const tbody = document.querySelector("tbody");
const inputs = document.querySelectorAll("#form [name]");
const form = document.getElementById("form");
const modal = new bootstrap.Modal("#doctorModal", {
  keyboard: false,
});
let doctorModal = document.getElementById("doctorModal");
doctorModal.addEventListener("hidden.bs.modal", () => {
  form.reset();
});
let toggle = true;
let _id; //temp

let doctors = [];
let doctor = {};
const render = () => {
  tbody.innerHTML = "";
  doctors.forEach((el, i) => {
    tbody.innerHTML += `
        <tr>
            <th scope="row">${i + 1}</th>
            <td>${el.number}</td>
            <td>${el.maxcount}</td>
            <td>${el.department}</td>
            <td>${convertDate(el.createdTime)}</td>
            <td>
            <button  class="btn btn-${
              el.status == 1 ? "success" : "warning"
            }" onclick="statRoom('${el._id}')"><i class="bi bi-${
      el.status == 1 ? "check" : "x"
    }"></i>
            </button>
            </td>
            <td class="text-end ">
                <button class="btn btn-info" onclick="getRoom('${
                  el._id
                }')"><i class="bi bi-pencil"></i>
                </button>
                <button  class="btn btn-danger" onclick="delRoom('${
                  el._id
                }')"><i class="bi bi-trash"></i>
                </button>
            </td>
             
          </tr>
    `;
  });
};

axios.get(`${url}/doctor`, header).then((res) => {
  doctors = [...res.data];
  render();
});

let depList = document.getElementById("depList");

axios.get(`${url}/department`, header).then((res) => {
  res.data.forEach((dep) => {
    if (dep.status == 1) {
      depList.innerHTML += `
    <option value="${dep._id}">${dep.title}</option>`;
    }
  });
});

const delRoom = (id) => {
  if (confirm("Qaroringiz qat'iymi?")) {
    axios.delete(`${url}/doctor/${id}`, header).then((res) => {
      doctors = doctors.filter((dep) => dep._id !== id);
      render();
      info.innerHTML = `
      <div class="alert alert-warning" role="alert">Shifokor o'chirildi</div>`;
      setTimeout(() => {
        info.innerHTML = "";
      }, 2000);
    });
  }
};

const addRoom = (e) => {
  e.preventDefault();

  let data = new FormData(e.target);
  data.forEach((value, name) => (doctor[name] = value));

  console.log(doctor);

  if (toggle) {
    axios.post(`${url}/doctor`, doctor, header).then((res) => {
      info.innerHTML = `
      <div class="alert alert-success" role="alert">Yangi shifokor qo'shildi</div>`;
      setTimeout(() => {
        info.innerHTML = "";
      }, 2000);
      doctors = [res.data, ...doctors];
      form.reset();
      render();
    });
  } else {
    saveRoom(doctor);
  }
};

const getRoom = (id) => {
  //edit ni bosilganda inputiga bosilgan itemni ma'lumotini olib kelib olish
  axios.get(`${url}/doctor/${id}`, header).then((res) => {
    _id = id;
    inputs.forEach((itemInput) => {
      itemInput.value = res.data[itemInput.getAttribute("name")];
    });

    toggle = false;

    modal.show();
  });
};

const saveRoom = (depValue) => {
  axios.put(`${url}/doctor`, { ...depValue, _id }, header).then((res) => {
    //_id: _id холати битта килиб ёзилди биз саклаган ва бекэндники
    info.innerHTML = `
    <div class="alert alert-success" role="alert">Shifikor ma'lumotlari yangilandi</div>`;
    setTimeout(() => {
      info.innerHTML = "";
    }, 2000);
    doctors = doctors.map((dep) => {
      if (dep._id == _id) return { ...res.data };
      return dep;
    });
    _id = null;
    toggle = true;
    form.reset();
    render();
  });
};

const statRoom = (id) => {
  axios.get(`${url}/doctor/change/${id}`, header).then((res) => {
    console.log(res.data);
    doctors = doctors.map((dep) => {
      if (dep._id == res.data._id) return { ...res.data };
      return dep;
    });
    render();
  });
};
