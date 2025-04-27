function addTask() {
  const input = document.getElementById("todoInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="edit-btn" onclick="editTask(this)">Edit</button>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    </div>
  `;
  document.getElementById("todoList").appendChild(listItem);
  input.value = "";
}

function editTask(button) {
  const listItem = button.closest("li");
  const taskSpan = listItem.querySelector("span");
  const newTask = prompt("Edit your task:", taskSpan.textContent);

  if (newTask !== null && newTask.trim() !== "") {
    taskSpan.textContent = newTask.trim();
  }
}

function deleteTask(button) {
  const listItem = button.closest("li");
  listItem.remove();
}
