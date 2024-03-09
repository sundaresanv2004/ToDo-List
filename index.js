document.addEventListener("DOMContentLoaded", function() {
    const activeTasksCountElement = document.getElementById("total_task");

    fetch("assets/data.json")
        .then(response => response.json())
        .then(data => {
            activeTasksCountElement.textContent = data.items.filter(item => !item.completed).length;
        })

        .catch(error => console.error("Error fetching JSON:", error));
});

function toggleDialog() {
    var dialogContainer = document.getElementById('dialog-container');
    dialogContainer.style.right = (dialogContainer.style.right === '0px') ? '-410px' : '0';
}

