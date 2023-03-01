// class ToDoList {
//   constructor(todos, status = false) {
//     this.todos = todos;
//     this.status = status;
//     this.todoArray = [];
//   }
//   removeTodo(index) {
//     this.todos.splice(index, 1);
//   }

//   markAsCompleted() {
//     this.status = true;
//     return this.status;
//   }
// }

// const todoForm = document.querySelector("#todoForm");
// const todoInput = document.querySelector("#new-task");
// let myDiv = document.getElementById("my-div");

// const toDoList = new ToDoList([]);

// todoForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const todoValue = todoInput.value.trim();
//   if (todoValue !== "") {
//     toDoList.todos.push(todoInput.value);

//     renderArray();
//     console.log(toDoList);
//     todoForm.reset();
//   }
// });

// function renderArray() {
//   myDiv.innerHTML = "";

//   toDoList.todos.forEach((item, index) => {
//     const newItem = document.createElement("p");
//     newItem.innerText = item;

//     const checkBox = document.createElement("input");
//     checkBox.type = "checkbox";
//     checkBox.className = "check-box";

//     checkBox.addEventListener("click", () => {
//       newItem.style.textDecoration = checkBox.checked ? "line-through" : "none";
//     });

//     const deleteButton = document.createElement("button");
//     deleteButton.innerText = "Delete";
//     deleteButton.className = "delete-button";

//     deleteButton.addEventListener("click", () => {
//       toDoList.removeTodo(index);
//       renderArray();
//     });
//     newItem.appendChild(checkBox);

//     newItem.appendChild(deleteButton);
//     myDiv.appendChild(newItem);
//   });
// }
// class ToDoList {
//   constructor(todos) {
//     this.todos = todos.map((todo) => {
//       return { text: todo, status: false };
//     });
//   }

//   removeTodo(index) {
//     this.todos.splice(index, 1);
//   }

//   toggleStatus(index) {
//     this.todos[index].status = !this.todos[index].status;
//   }
// }

// const todoForm = document.querySelector("#todoForm");
// const todoInput = document.querySelector("#new-task");
// let myDiv = document.getElementById("my-div");

// const toDoList = new ToDoList([]);

// todoForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const todoValue = todoInput.value.trim();
//   if (todoValue !== "") {
//     toDoList.todos.push(todoInput.value);

//     renderArray();
//     console.log(toDoList);
//     todoForm.reset();
//   }
// });

// function renderArray() {
//   myDiv.innerHTML = "";

//   toDoList.todos.forEach((item, index) => {
//     const newItem = document.createElement("p");
//     newItem.innerText = item.text;

//     const deleteButton = document.createElement("button");
//     deleteButton.innerText = "Delete";
//     deleteButton.className = "delete-button";

//     deleteButton.addEventListener("click", () => {
//       toDoList.removeTodo(index);
//       renderArray();
//     });

//     const checkBox = document.createElement("input");
//     checkBox.type = "checkbox";
//     checkBox.checked = item.status; // Set checkbox state based on status property
//     checkBox.className = "check-box";

//     checkBox.addEventListener("change", () => {
//       toDoList.toggleStatus(index); // Toggle status property based on checkbox state
//       renderArray();
//     });

//     newItem.appendChild(checkBox);
//     newItem.appendChild(deleteButton);
//     myDiv.appendChild(newItem);
//   });
// }
class ToDoList {
  constructor(todos = []) {
    this.todos = todos.map((todo) => ({ text: todo.text, status: false }));
  }

  addTodo(todo) {
    this.todos.push({ text: todo, status: false });
  }

  removeTodo(index) {
    this.todos.splice(index, 1);
  }

  toggleStatus(index) {
    this.todos[index].status = !this.todos[index].status;
  }
}

const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#new-task");
let myDiv = document.getElementById("my-div");

const toDoList = new ToDoList([]);

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoValue = todoInput.value.trim();
  if (todoValue !== "") {
    toDoList.addTodo(todoValue);

    renderArray();
    console.log(toDoList);
    todoForm.reset();
  }
});

function renderArray() {
  myDiv.innerHTML = "";

  toDoList.todos.forEach((todo, index) => {
    const newItem = document.createElement("p");
    newItem.innerText = todo.text;

    const statusSpan = document.createElement("span");
    statusSpan.className = "status";
    statusSpan.innerText = todo.status ? "Completed" : "Incomplete";

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "check-box";
    checkBox.checked = todo.status; // set checked attribute

    checkBox.addEventListener("click", () => {
      newItem.style.textDecoration = checkBox.checked ? "line-through" : "none";
      toDoList.toggleStatus(index);
      statusSpan.innerText = todo.status ? "Completed" : "Incomplete";
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", () => {
      toDoList.removeTodo(index);
      renderArray();
    });

    newItem.appendChild(checkBox);
    newItem.appendChild(statusSpan);
    newItem.appendChild(deleteButton);
    myDiv.appendChild(newItem);
  });
}
