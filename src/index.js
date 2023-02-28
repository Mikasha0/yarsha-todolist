class ToDoList {
  constructor(todos) {
    this.todos = todos;
    this.todoArray = [];
  }
  removeTodo(index) {
    this.todos.splice(index, 1);
  }
}

const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#new-task");
var myDiv = document.getElementById("my-div");

const toDoList = new ToDoList([]);

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoValue = todoInput.value.trim();
  if (todoValue !== "") {
    toDoList.todos.push(todoInput.value);

    renderArray();
    console.log(toDoList);
    todoForm.reset();
  }
});

function renderArray() {
  myDiv.innerHTML = "";

  toDoList.todos.forEach((item, index) => {
    const newItem = document.createElement("p");
    newItem.innerText = item;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", () => {
      toDoList.removeTodo(index);
      renderArray();
    });

    newItem.appendChild(deleteButton);

    myDiv.appendChild(newItem);
  });
}
