import { Component, Input } from '@angular/core';
import { Task } from '../add-task/Taks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  onTaskChange(task: Task, event: Event){
    const checkbox = event.target as HTMLInputElement;
    task.completed = checkbox.checked;
    console.log(task);
  }
}
