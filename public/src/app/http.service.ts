import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './models/task.interface';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  index() {
    return this.http.get<Task[]>('/api/tasks');
  }
  find(id: string) {
    return this.http.get<Task>(`/api/tasks/${id}`);
  }
  update(task: Task) {
    console.log(task);
    return this.http.put<Task>(`/api/tasks/${task._id}`, task);
  }
  create(task: Task) {
    return this.http.post<Task>('/api/tasks', task);
  }
  delete(id: string) {
    return this.http.delete(`/api/tasks/${id}`);
  }
}

