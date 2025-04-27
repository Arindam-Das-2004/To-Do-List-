let tasks = [];

// Function to add a task
const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({ text: text, completed: false });
        updateTasksList();
        taskInput.value = ""; // Clear input after adding
        updateStates();
    }
};

// Function to delete a task
const deleteTask = (index) => {
    tasks.splice(index, 1);
    updateTasksList();
    updateStates();
};

// Function to edit a task
const editTask = (index) => {
    const taskInput = document.getElementById("taskInput");
    taskInput.value = tasks[index].text;
    tasks.splice(index, 1); // Remove the task being edited
    updateTasksList();
    updateStates();
};

// Function to update the progress and statistics
const updateStates = () => {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0; // Avoid division by zero
    const progressBar = document.getElementById('progress');
    const statsNumbers = document.getElementById('numbers');

    progressBar.style.width = `${progress}%`;
    statsNumbers.textContent = `${completedTasks}/${totalTasks}`;
};

// Function to update the task list display
const updateTasksList = () => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ""; // Clear the current task list

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
        <div class="taskItem">
            <div class="task ${task.completed ? 'completed' : ''}">
                <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""} onclick="toggleTaskComplete(${index})"/>
                <p>${task.text}</p>
            </div>
            <div class="icons">
                <i class="fa-regular fa-pen-to-square" onclick="editTask(${index})"></i>
                <i class="fa-solid fa-trash-can" onclick="deleteTask(${index})"></i>
            </div>
        </div>
        `;
        taskList.appendChild(listItem); // Append the new list item to the task list
    });
};

// Function to toggle the completion status of a task
const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed; // Toggle the completed status
    updateTasksList();
    updateStates();
};

// Event listener for the submit button
document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();
    addTask();
});

// Initialize the progress bar and stats display
updateStates(); // Call this to set initial state