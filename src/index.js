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

  function getTodoStatusText(todo) {
    return todo.status ? "Completed" : "Incomplete";
  }

  toDoList.todos.forEach((todo, index) => {
    const newItem = document.createElement("p");
    newItem.innerText = todo.text;

    const statusSpan = document.createElement("span");
    statusSpan.className = "status";
    statusSpan.innerText = getTodoStatusText(todo);

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "check-box";
    checkBox.checked = todo.status;

    checkBox.addEventListener("click", () => {
      newItem.style.textDecoration = checkBox.checked ? "line-through" : "none";
      toDoList.toggleStatus(index);
      statusSpan.innerText = getTodoStatusText(todo);
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", () => {
      toDoList.removeTodo(index);
      renderArray();
    });
    [checkBox, statusSpan, deleteButton].forEach((element) => {
      newItem.appendChild(element);
    });
    myDiv.appendChild(newItem);
  });
}
