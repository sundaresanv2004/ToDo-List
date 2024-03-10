

document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("todoList");
    const activeTasksCountElement = document.getElementById("total_task");

    const newTaskForm = document.getElementById("newTaskForm");

    newTaskForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const newTaskInput = document.getElementById("newTask");
        const taskText = newTaskInput.value.trim();

        if (taskText !== "") {
            const taskItem = document.createElement("div");
            taskItem.className = "task";
            taskItem.innerHTML = `
                <div class="todo-item">
                    <div class="checkbox-and-title">
                        <input type="checkbox" id="${taskText}">
                        <label for="${taskText}">${taskText}</label>
                    </div>
                    <span class="material-icons edit-icon">edit</span>
                    <span class="material-icons delete-icon" onclick="deleteTask(this)">delete</span>
                </div>
            `;
            taskList.appendChild(taskItem);
            newTaskInput.value = "";

            var divElements = taskList.getElementsByClassName('task');
            activeTasksCountElement.textContent = divElements.length;
        }
    });
});

// ... (your existing code)

function deleteTask(button) {
    const taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
    const activeTasksCountElement = document.getElementById("total_task");
    var currentText = activeTasksCountElement.textContent;
    activeTasksCountElement.textContent = parseInt(currentText) - 1;
}

function toggleDialog() {
    var dialogContainer = document.getElementById('dialog-container');
    dialogContainer.style.right = (dialogContainer.style.right === '0px') ? '-410px' : '0';
}

