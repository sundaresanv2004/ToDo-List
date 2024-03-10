function toggleDialog() {
    var dialogContainer = document.getElementById('dialog-container');
    dialogContainer.style.right = (dialogContainer.style.right === '0px') ? '-410px' : '0';
}

function edittoggleDialog() {
    var dialogContainer = document.getElementById('edit-dialog-container');
    dialogContainer.style.right = (dialogContainer.style.right === '0px') ? '-410px' : '0';
}

document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("todoList");
    const activeTasksCountElement = document.getElementById("total_task");

    function createTaskElement(taskText) {
        const taskItem = document.createElement("div");
        taskItem.className = "task";
        taskItem.innerHTML = `
            <div class="todo-item">
                <div class="checkbox-and-title">
                    <input type="checkbox" id="${taskText}">
                    <label for="${taskText}">${taskText}</label>
                </div>
                <span class="material-icons edit-icon" onclick="openEditDialog(this)">edit</span>
                <span class="material-icons delete-icon" onclick="deleteTask(this)">delete</span>
            </div>
        `;
        return taskItem;
    }

    const newTaskForm = document.getElementById("newTaskForm");

    newTaskForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const newTaskInput = document.getElementById("newTask");
        const taskText = newTaskInput.value.trim();

        if (taskText !== "") {
            const taskItem = createTaskElement(taskText);
            taskList.appendChild(taskItem);
            newTaskInput.value = "";

            var currentText = activeTasksCountElement.textContent;
            activeTasksCountElement.textContent = parseInt(currentText) + 1;

            toggleDialog(true);
        }
    });

    const editTaskInput = document.getElementById("editTask");
    const editTaskForm = document.getElementById("editTaskForm");

    editTaskForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const taskLabel = document.querySelector('.task.editing label');
        if (editTaskInput.value.trim() !== "") {
            taskLabel.textContent = editTaskInput.value.trim();
        }
        edittoggleDialog();
    });

});

function openEditDialog(button) {
    edittoggleDialog();
    const taskItem = button.closest('.task');
    const label = taskItem.querySelector('label');

    const editTaskInput = document.getElementById("editTask");
    editTaskInput.value = label.textContent;

    document.querySelectorAll('.task.editing').forEach(task => {
        task.classList.remove('editing');
    });

    taskItem.classList.add('editing');
}

function deleteTask(button) {
    const taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
    const activeTasksCountElement = document.getElementById("total_task");
    var currentText = activeTasksCountElement.textContent;
    activeTasksCountElement.textContent = parseInt(currentText) - 1;
}
