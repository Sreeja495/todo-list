function addTask() {
    var input = document.getElementById("new-task");
    var taskName = input.value;
    if (taskName.trim() === "") {
        alert("Please enter a task");
        return;
    }
    
    var ul = document.getElementById("todo-list");
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    var span = document.createElement("span");
    span.textContent = taskName;
    li.appendChild(checkbox);
    li.appendChild(span);
    ul.appendChild(li);
    
    input.value = "";
}
