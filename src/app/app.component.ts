import { Component } from '@angular/core';
import { Task } from './add-task/Taks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  filter: string = 'all';

  addTask(task : Task){
    this.tasks.push(task);
    this.applyFilter();
  }

  setFilter(filter: string){
    this.filter = filter;
    this.applyFilter();
  }

  applyFilter() {
    if (this.filter === 'all') {
      this.filteredTasks = this.tasks;
    } else if (this.filter === 'completed') {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else if (this.filter === 'notCompleted') {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    }
  }
}
