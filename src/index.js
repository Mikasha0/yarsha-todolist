class ToDoList {
  constructor(todos = []) {
    this.todos = todos.map((todo) => ({
      text: todo.text,
      status: todo.status || false,
    }));
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

const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];

const toDoList = new ToDoList(storedTodos);

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoValue = todoInput.value.trim();
  if (todoValue !== "") {
    toDoList.addTodo(todoValue);

    localStorage.setItem("todos", JSON.stringify(toDoList.todos));

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

  function getTextDecorator(checkBox) {
    return checkBox.checked ? "line-through" : "none";
  }

  function createElement(elementType, text, className, type) {
    const element = document.createElement(elementType);
    element.innerText = text;
    element.className = className;
    element.type = type;
    return element;
  }

  const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];

  storedTodos.forEach((todo, index) => {
    const newItem = document.createElement("p");
    newItem.innerText = todo.text;

    const statusSpan = document.createElement("span");
    statusSpan.className = "status";
    statusSpan.innerText = getTodoStatusText(todo);

    const checkBox = createElement("input", "", "check-box", "checkbox");
    checkBox.checked = todo.status;

    checkBox.addEventListener("click", () => {
      newItem.style.textDecoration = getTextDecorator(checkBox);
      toDoList.toggleStatus(index);
      statusSpan.innerText = getTodoStatusText(todo);

      localStorage.setItem("todos", JSON.stringify(toDoList.todos));
    });

    const deleteButton = createElement("button", "Delete", "delete-button");

    deleteButton.addEventListener("click", () => {
      toDoList.removeTodo(index);

      localStorage.setItem("todos", JSON.stringify(toDoList.todos));

      renderArray();
    });
    [checkBox, statusSpan, deleteButton].forEach((element) => {
      newItem.appendChild(element);
    });
    myDiv.appendChild(newItem);
  });
}
renderArray();
