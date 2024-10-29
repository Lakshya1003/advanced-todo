        const todoList = document.getElementById("todoList");
        const completedList = document.getElementById("completedList");

        function addTask() {
            const taskInput = document.getElementById("taskInput");
            const deadlineInput = document.getElementById("deadlineInput");
            const taskText = taskInput.value.trim();
            const deadlineDate = deadlineInput.value;

            if (taskText) {
                const listItem = createTaskItem(taskText, deadlineDate);
                todoList.appendChild(listItem);
                taskInput.value = ''; // Clear task input field
                deadlineInput.value = ''; // Clear deadline input field
            }
        }

        function createTaskItem(taskText, deadlineDate) {
            const listItem = document.createElement("li");

            const taskSpan = document.createElement("span");
            taskSpan.className = "task-text";
            taskSpan.textContent = taskText;
            listItem.appendChild(taskSpan);

            if (deadlineDate) {
                const deadlineSpan = document.createElement("span");
                deadlineSpan.className = "deadline";
                deadlineSpan.textContent = `Deadline: ${deadlineDate}`;
                listItem.appendChild(deadlineSpan);
            }

            const completeButton = document.createElement("button");
            completeButton.textContent = "Complete";
            completeButton.onclick = () => completeTask(listItem);

            listItem.appendChild(completeButton);
            return listItem;
        }

        function completeTask(taskItem) {
            taskItem.querySelector("button").remove(); // Remove "Complete" button

            const restoreButton = document.createElement("button");
            restoreButton.textContent = "Restore";
            restoreButton.onclick = () => restoreTask(taskItem);

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete";
            deleteButton.onclick = () => deleteTask(taskItem);

            taskItem.appendChild(restoreButton);
            taskItem.appendChild(deleteButton);
            completedList.appendChild(taskItem); // Move to completed list
        }

        function restoreTask(taskItem) {
            taskItem.querySelectorAll("button").forEach(button => button.remove()); // Remove "Restore" and "Delete" buttons

            const completeButton = document.createElement("button");
            completeButton.textContent = "Complete";
            completeButton.onclick = () => completeTask(taskItem);

            taskItem.appendChild(completeButton);
            todoList.appendChild(taskItem); // Move back to to-do list
        }

        function deleteTask(taskItem) {
            taskItem.remove(); // Permanently delete the task from the list
        }