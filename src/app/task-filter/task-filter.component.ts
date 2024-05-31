import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  @Output() filterChanged = new EventEmitter<string>();
  filter: string = 'all';

  setFilter(newFilter: string) {
    this.filter = newFilter;
    this.filterChanged.emit(this.filter);
  }
}
