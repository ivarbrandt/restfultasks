import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './models/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  tasks: Task[] = [];
  newTask: Task = {
    title: '',
    description: '',
    completed: false
  };
  selectedTask: Task;
  constructor(private HttpService: HttpService) {}


// getAllTasks() {
//   this.HttpService.index().subscribe(data => { this.tasks = data;
//   });
// }
// getOneTask(id: string) {
//   this.HttpService.find(id).subscribe(data => {
//     this.selectedTask = data;
//   });
// }
// createTask() {
//   this.HttpService.create(this.newTask).subscribe(data => {
//     this.tasks.push(data);
//     this.newTask = {
//       title: '',
//       description: '',
//       completed: false
//     };
//   });
// }
// updateTask(task: Task) {
//   this.HttpService.update(task).subscribe(data => {

//   })
// }


// }