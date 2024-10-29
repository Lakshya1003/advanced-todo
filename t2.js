// Function to add a new task to the To-Do list
function addTask(taskInputId, todoListId, completedListId) {
    const taskInput = document.getElementById(taskInputId);
    const todoList = document.getElementById(todoListId);

    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskInput.value;

        // Complete Button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete');
        completeButton.onclick = () => completeTask(taskItem, completedListId, todoListId);

        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.onclick = () => deleteTask(taskItem);

        // Append buttons to the task item
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);
        todoList.appendChild(taskItem);

        // Clear input field
        taskInput.value = '';
    }
}

// Function to mark a task as complete and move it to the Completed list
function completeTask(taskItem, completedListId, todoListId) {
    const completedList = document.getElementById(completedListId);

    // Change Complete button to Restore
    const restoreButton = taskItem.querySelector('.complete');
    restoreButton.textContent = 'Restore';
    restoreButton.classList.remove('complete');
    restoreButton.classList.add('restore');
    restoreButton.onclick = () => restoreTask(taskItem, todoListId);

    // Move the task item to the Completed list
    completedList.appendChild(taskItem);
}

// Function to restore a task from the Completed list back to the To-Do list
function restoreTask(taskItem, todoListId) {
    const todoList = document.getElementById(todoListId);

    // Change Restore button back to Complete
    const completeButton = taskItem.querySelector('.restore');
    completeButton.textContent = 'Complete';
    completeButton.classList.remove('restore');
    completeButton.classList.add('complete');
    completeButton.onclick = () => completeTask(taskItem, todoListId, todoListId);

    // Move the task item back to the To-Do list
    todoList.appendChild(taskItem);
}

// Function to delete a task permanently
function deleteTask(taskItem) {
    taskItem.remove();
}
