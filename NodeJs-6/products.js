// Mahsulotlar sklad loyihasi. Maydonlardan mahsulot nomi, narhi, vazni va soni bo'ladi. CRUD qilinishi lozim va umumiy sklad mavjud bo'lgan mahsulotlar narhi va umumiy vazni hisoblab turuvchi statistika malumoti zarur

const form = document.getElementById("form-create");
const url = "http://localhost:3000/products";
const tbody = document.querySelector("tbody");
const inps = document.querySelectorAll("#form-create [name]");

let products = [];
let toggle = false;

const render = () => {
  tbody.innerHTML = "";
  products.forEach((item, i) => {
    tbody.innerHTML += `
    <tr>
    <th scope="row">${i + 1}</th>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>${item.massa}</td>
    <td>${item.count}</td>
    <td><button class="btn btn-info" onclick="editProd(${
      item.id
    })"><i class="bi bi-pencil"></i></button></td>
    <td><button  class="btn btn-danger" onclick="delProd(${
      item.id
    })"><i class="bi bi-trash"></i></button></td>
     </tr>`;
  });
};

fetch(`${url}?_sort=id&_order=desc`)
  .then((resp) => resp.json())
  .then((res) => {
    products = [...res];
    render();
  });

function editProd(id) {
  fetch(`${url}/${id}`)
    .then((res) => res.json())
    .then((product) => {
      inps.forEach((el) => {
        el.value = product[el.getAttribute("name")];
      });
    });
  toggle = true;
}

function delProd(id) {
  fetch(`${url}/${id}`, {
    method: "delete",
  }).then(() => {
    products = products.filter((e) => e.id !== id);
  });
  render();
}

const addProd = (e) => {
  e.preventDefault();
  const product = {};

  inps.forEach((el) => {
    product[el.getAttribute("name")] = el.value;
  });

  form.reset();
  if (toggle) {
    fetch(`${url}/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((upProduct) => {
        products = products.map((product) => {
          if (product.id == upProduct.id) return upProduct;
          return product;
        });
        toggle = false;
        render();
      });
  } else {
    delete product.id;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((newProduct) => {
        products = [newProduct, ...products];
        render();
      });
  }
};
