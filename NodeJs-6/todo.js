let input = document.getElementById("input-create");
const form = document.getElementById("form-create");
const url = "http://localhost:3000/todos";

//const btn = document.getElementsByTagName("button");
const tbody = document.querySelector("tbody");

let todos = [];
let toggle = false;

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

fetch(`${url}?_sort=id&_order=desc`)
  .then((resp) => resp.json())
  .then((res) => {
    todos = [...res];
    render();
  });

function editTodo(id) {
  fetch(`${url}/${id}`)
    .then((res) => res.json())
    .then((todo) => {
      console.log(todo);
      input.value = todo[input.getAttribute("name")];
    });
  toggle = true;
}

function delTodo(id) {
  fetch(`${url}/${id}`, {
    method: "delete",
  }).then(() => {
    todos = todos.filter((e) => e.id !== id);
  });
  render();
}

const addTodos = (e) => {
  e.preventDefault();
  const todo = {};

  todo[input.getAttribute("name")] = input.value;

  console.log(todo);
  form.reset();
  if (toggle) {
    fetch(`${url}/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((newTodo) => {
        todos = todos.map((todo) => {
          if (todo.id == newTodo.id) return newTodo;
          return todo;
        });
        toggle = false;
        render();
      });
  } else {
    delete todo.id;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((newTodo) => {
        todos = [newTodo, ...todos];
        render();
      });
  }
};
