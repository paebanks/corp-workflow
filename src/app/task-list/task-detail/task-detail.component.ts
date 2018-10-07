import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  id;
  task =  null;
  constructor(private _svc: TaskService, private route: ActivatedRoute) { 
  }


 

  

  ngOnInit() {
  	//get task id from route parameter
  	this.route.params
  	.subscribe((data) => 
  		{
  			this.id = data['id'];
  			
  		}	
    );

  	this._svc.getTasks((data) =>{
  		const tasks  = data;
  		this.task = tasks.filter((task) => task.task_id === this.id);
  		console.log(this.task);
  	})


  }


}
