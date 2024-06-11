document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    let taskList = document.getElementById('taskList');

    let listItem = document.createElement('li');

    let taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
}
