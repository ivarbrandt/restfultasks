import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Task } from './models/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  tasks: Task[] = [];
  newTask: Task = {
    title: '',
    description: '',
    completed: false
  };
  selectedTask: Task;
  constructor(private httpService: HttpService) {}

  ngOnInit() {
    // this.getAllTasks();
    // this.newTask = {title: '', description: '', completed: false};
  }

getAllTasks() {
  this.httpService.index().subscribe(data => {
    this.tasks = data;
  });
}
getOneTask(id: string) {
  this.httpService.find(id).subscribe(data => {
    this.selectedTask = data;
  });
}
createTask() {
  this.httpService.create(this.newTask).subscribe(data => {
    this.tasks.push(data);
    this.newTask = {
      title: '',
      description: '',
      completed: false
    };
  });
}
updateTask() {
  this.httpService.update(this.selectedTask).subscribe(data => {
    // given this,selectedtask's id, find the corresponding task in this.tasks
    const index = this.tasks.findIndex(task => task._id === this.selectedTask._id);
    // grab its index, then set that index in this.tasks array to this.selectedTask
    this.tasks[index] = this.selectedTask;
    // this.selectedTask = this.
    this.selectedTask = { title: '', description: '', completed: false };
    console.log(this.newTask);
  });
}

deleteTask(id: string) {
  this.httpService.delete(id).subscribe();
  this.httpService.index().subscribe(data => {
    this.tasks = data;
  });
  }
}






