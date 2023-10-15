let url = "https://hospital.bookblogs.uz";
let token;
let header;

if (localStorage.getItem("hospital-token")) {
  token = localStorage.getItem("hospital-token");
  header = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  axios.post(`${url}/auth/checkuser`, {}, header).then((res) => {
    console.log(res.data);
  });
} else {
  window.location.href = "login.html";
}
