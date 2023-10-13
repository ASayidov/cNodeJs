let input = document.getElementById("input-create");
const form = document.getElementById("form-create");
const url = "http://localhost:3000/todos";

const btn = document.getElementsByTagName("button");
const tbody = document.querySelector("tbody");

let todos = [];

const render = () => {
  tbody.innerHTML = "";
  todos.forEach((item, i) => {
    tbody.innerHTML += `
    <tr>
    <td>${i + 1}</td>
    <td>${item.input}</td>
    <td><button onclick="editTodo(${item.id})">edit</button></td>
    <td><button onclick="delTodo(${item.id})">delete</button></td>
     </tr>`;
  });
};

fetch(url)
  .then((resp) => resp.json())
  .then((res) => {
    todos = [...res, todos];
    render();
  });

function editTodo(id) {
  fetch(`${url}/${id}`)
    .then((res) => res.json())
    .then((todo) => (input.value = todo[input.getAttribute("name")]));
}

function delTodo(id) {
  fetch(`${url}/${id}`, {
    method: "delete",
  }).then(() => {
    todos = todos.filter((e) => e.id !== id);
  });
  render();
}

const addTodos = () => {
  let todo = {};
  todo[input.getAttribute("name")] = input.value;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  })
    .then((res) => res.json())
    .then((newTodos) => {
      todo = [newTodos, ...todo];
    });
  render();
};
