import { Component ,  Input , OnInit ,Output,EventEmitter} from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
 @Input() task: Task
 @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
 @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
 faTimes = faTimes;
 
 constructor(){
    this.task = {id: 1,
      text: 'Doctors Appointment',
      day: 'May 5th at 2:30pm',
      reminder: true,}
 }
 ngOnInit(): void {  }
 onDelete(task : Task) {
  this.onDeleteTask.emit(task);
}

onToggle(task : Task) {
  this.onToggleReminder.emit(task);
}
}
