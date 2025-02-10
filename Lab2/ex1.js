var tasks = [];
function addTask(task) {
    tasks.push(task);
    if (tasks[tasks.length - 1] == task) {
        console.log("Inserted string :'" + task + "'  sucessfully.");
    }
    return tasks.length;
}
function listAllTasks() {
    tasks.forEach(function (ele) {
        console.log("Item: " + ele + " is in my Tasks list.");
    });
}
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log(task + " has been removed from my Task list.");
    }
    else {
        console.log(task + " is NOT in my Tasks list.");
    }
    return tasks.length;
}
