interface TaskInterface {
    Tasks: Array<string>;
    addTask(task: string): number;
    listAllTasks(): void;
    deleteTask(task: string): number;
}

class Tasks implements TaskInterface {

    Tasks: Array<string> = ["stuff"];

    addTask(task: string): number {
        this.Tasks.push(task);
        console.log(task + " has been added to my Tasks list.");
        return this.Tasks.length;
    }

    listAllTasks(): void {
        this.Tasks.forEach((ele)=>{
            console.log("Item: " + ele + " is in my Tasks list.");
        })
    }

    deleteTask(task: string): number {
        let index: number = this.Tasks.indexOf(task);

        if(index > -1){
            this.Tasks.splice(index,1);
            console.log(task + " has been removed from my Task list.");
        }else {
            console.log(task + " is NOT in my Tasks list.");
        }
    
        return this.Tasks.length;
    }
}


    let myTasks = new Tasks();
    myTasks.addTask("Work!!");
    myTasks.listAllTasks();
    myTasks.deleteTask("stuff");
    myTasks.deleteTask("Work!!");
    myTasks.listAllTasks();