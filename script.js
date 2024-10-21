const addTaskButton = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        checkbox.addEventListener('change', () => {
            li.classList.toggle('completed', checkbox.checked);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            taskList.removeChild(li);
        };

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(taskText));
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }
};

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
