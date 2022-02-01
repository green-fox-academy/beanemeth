//Create a new class called Todo that has three fields representing the task as a string,
// the priority as string and whether it is done or not as a boolean

// The todo should have the following string representation: Task: Buy milk | Priority: high | Done: trues
import { Printable } from './printable'

export class ToDo implements Printable{
    private task: string;
    private priority: string;
    private done: boolean;
    

    constructor(task: string, priority: string, done: boolean) {
        this.task = task;
        this.priority = priority;
        this.done = done;
    }
    printAllFields(){
        console.log('Task: ' + this.task + ' | ' + 'Priority: ' + this.priority + ' | ' + 'Done: ' + this.done)
    }
}