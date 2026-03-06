import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports:[FormsModule,CommonModule],
  templateUrl: './tasks.component.html'
})
export class TasksComponent {

  tasks:any[]=[];
  title='';

  token=localStorage.getItem('token') || '';

  constructor(private api:ApiService){
    this.loadTasks();
  }

  loadTasks(){
    this.api.tasks(this.token).subscribe((res:any)=>{
      this.tasks=res;
    });
  }

  createTask(){

    this.api.createTask(this.token,{
      title:this.title
    }).subscribe(()=>{
      this.title='';
      this.loadTasks();
    });

  }

  deleteTask(id:number){

    this.api.deleteTask(this.token,id)
    .subscribe(()=>{
      this.loadTasks();
    });

  }

  toggleComplete(task:any){

  this.api.updateTask(this.token,task.id,{
    title:task.title,
    completed:!task.completed
  }).subscribe(()=>{
    this.loadTasks();
  });

}

updateTask(task:any){

  this.api.updateTask(this.token,task.id,{
    title:task.title,
    completed:task.completed
  }).subscribe(()=>{
    this.loadTasks();
  });

}
}