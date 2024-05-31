import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from './Taks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  taskName : string = '';

  @Output() taskAdded = new EventEmitter<Task>();
  
  addTask(){
    const newTask: Task = {
      name: this.taskName,
      completed: false
    };
    this.taskAdded.emit(newTask);
    this.taskName = '';

    console.log(newTask)
  }
}
