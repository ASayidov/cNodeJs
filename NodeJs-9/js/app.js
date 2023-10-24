let url = "https://hospital.bookblogs.uz";
let token;
let header;
const info = document.getElementById("info") || null;

if (localStorage.getItem("hospital-token")) {
  token = localStorage.getItem("hospital-token");
  header = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  axios.post(`${url}/auth/checkuser`, {}, header).catch((e) => {
    alert("Sizga bu saxifaga o'tishga ruxsat yo'q");
    window.location.href = "login.html";
  });
} else {
  window.location.href = "login.html";
}

function convertDate(date) {
  const d = new Date(date);
  return `${d.getHours()}:${d.getMinutes()} ${d.getDate()}/${
    d.getMonth() + 1
  }/${d.getFullYear()}`;
}

const menu = [
  {
    title: "Bosh sahifa",
    link: "./index.html",
  },
  {
    title: "Bo'limlar",
    link: "./department.html",
  },
  {
    title: "Mutaxasislar",
    link: "./spec.html",
  },
  {
    title: "Xonalar",
    link: "./room.html",
  },
  {
    title: "Shifokorlar",
    link: "./doctor.html",
  },
];

let ulMenu = document.querySelector("nav ul");

ulMenu.innerHTML = "";

menu.forEach((item) => {
  ulMenu.innerHTML += `
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="${item.link}">${item.title}</a>
    </li>
  `;
});
