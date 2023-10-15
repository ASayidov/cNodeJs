const auth = (e, type = null) => {
  e.preventDefault();
  let url = "https://hospital.bookblogs.uz";
  let form = e.target;
  let data = new FormData(form);
  let user = {};
  data.forEach((value, name) => (user[name] = value));
  console.log(user);

  if (type == "login") {
    axios
      .post(`${url}/auth/login`, user)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("hospital-token", res.data.token);
        localStorage.setItem("hospital-user", JSON.stringify(res.data.user));
        alert("Xush kelibsiz");
        window.location.href = "index.html";
      })
      .catch((e) => alert(e.response.data));
  } else {
    axios.post(`${url}/auth/reg`, user).then((res) => {
      console.log(res.data);
      if (res.data == "success") {
        window.location.href = "login.html";
      } else if (res.data == "exist") {
        alert("Bunday loginli foydalanuvchi mavjud");
      }
    });
  }
};
