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
            <td><img src="${url}/${el.file.at(0)}" width="90"></td>
          
            <td>${el.name}</td>
            <td>${el.department}</td>
            <td>${el.spec}</td>
            <td>${el.phone}</td>
            <td>${worktimeList[el.worktime]}</td>
            <td>${convertDate(el.createdTime)}</td>
            <td>
            <button  class="btn btn-${
              el.status == 1 ? "success" : "warning"
            }" onclick="statDoctor('${el._id}')"><i class="bi bi-${
      el.status == 1 ? "check" : "x"
    }"></i>
            </button>
            </td>
            <td class="text-end ">
                <button class="btn btn-info" onclick="getDoctor('${
                  el._id
                }')"><i class="bi bi-pencil"></i>
                </button>
                <button  class="btn btn-danger" onclick="delDoctor('${
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
let specList = document.getElementById("specList");

axios.get(`${url}/spec`, header).then((res) => {
  res.data.forEach((spe) => {
    if (spe.status == 1) {
      specList.innerHTML += `
      <option value="${spe._id}">${spe.title}</option>`;
    }
  });
});

axios.get(`${url}/department`, header).then((res) => {
  res.data.forEach((dep) => {
    if (dep.status == 1) {
      depList.innerHTML += `
    <option value="${dep._id}">${dep.title}</option>`;
    }
  });
});

let placeSelect = document.getElementById("place");
let regionSelect = document.getElementById("region");

regions.forEach((region) => {
  let opt = `<option value="${region.id}">${region.name}</option>`;
  placeSelect.innerHTML += opt;
  regionSelect.innerHTML += opt;
});

let district = document.getElementById("district");

const getDistricts = (id) => {
  district.innerHTML = "";
  district.innerHTML = `<option selected>Ro'yxatdan tanlang</option>`;
  districts.forEach((distr) => {
    if (distr.region_id == id) {
      district.innerHTML += `<option value="${distr.id}">${distr.name}</option>`;
    }
  });
};

const familyList = ["Turmush qurgan", "Turmush qurmagan"];
let familySelect = document.getElementById("family");

familyList.forEach((fam, index) => {
  familySelect.innerHTML += `<option value="${index}">${fam}</option>`;
});

const worktimeList = ["O'rindosh", "Yarim stavka", "To'liq stavka", "Soatbay"];
let worktimeSelect = document.getElementById("worktime");

worktimeList.forEach((fam, index) => {
  worktimeSelect.innerHTML += `<option value="${index}">${fam}</option>`;
});

const delDoctor = (id) => {
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

const addDoctor = (e) => {
  e.preventDefault();

  let data = new FormData(e.target);
  data.forEach((value, name) => (doctor[name] = value));

  console.log(doctor);

  let fileInput = document.getElementById("file");

  console.log(fileInput.files[0]);

  if (toggle) {
    axios.post(`${url}/doctor`, doctor, headerFile).then((res) => {
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
    saveDoctor(doctor);
  }
};

const getDoctor = (id) => {
  //edit ni bosilganda inputiga bosilgan itemni ma'lumotini olib kelib olish
  axios.get(`${url}/doctor/${id}`, header).then((res) => {
    _id = id;
    inputs.forEach((itemInput) => {
      if (itemInput.name == "region") {
        itemInput.value = res.data[itemInput.getAttribute("name")];
        getDistricts(res.data[itemInput.getAttribute("name")]);

        return;
      }
      if (itemInput.type == "file") return;
      if (
        itemInput.type == "radio" &&
        itemInput.value == res.data[itemInput.getAttribute("name")]
      ) {
        itemInput.checked = true;
        return;
      }

      itemInput.value = res.data[itemInput.getAttribute("name")];
    });

    toggle = false;

    modal.show();
  });
};

const saveDoctor = (depValue) => {
  axios.put(`${url}/doctor`, { ...depValue, _id }, headerFile).then((res) => {
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

const statDoctor = (id) => {
  axios.get(`${url}/doctor/change/${id}`, header).then((res) => {
    console.log(res.data);
    doctors = doctors.map((dep) => {
      if (dep._id == res.data._id) return { ...res.data };
      return dep;
    });
    render();
  });
};
