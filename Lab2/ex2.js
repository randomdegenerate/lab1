var Tasks = /** @class */ (function () {
    function Tasks() {
        this.Tasks = ["stuff"];
    }
    Tasks.prototype.addTask = function (task) {
        this.Tasks.push(task);
        console.log(task + " has been added to my Tasks list.");
        return this.Tasks.length;
    };
    Tasks.prototype.listAllTasks = function () {
        this.Tasks.forEach(function (ele) {
            console.log("Item: " + ele + " is in my Tasks list.");
        });
    };
    Tasks.prototype.deleteTask = function (task) {
        var index = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log(task + " has been removed from my Task list.");
        }
        else {
            console.log(task + " is NOT in my Tasks list.");
        }
        return this.Tasks.length;
    };
    return Tasks;
}());
var myTasks = new Tasks();
myTasks.addTask("Work!!");
myTasks.listAllTasks();
myTasks.deleteTask("stuff");
myTasks.deleteTask("Work!!");
myTasks.listAllTasks();
