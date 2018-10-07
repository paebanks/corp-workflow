import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task.service';

import * as $ from "jquery";
/*import * as bootstrap from "bootstrap";*/
import 'datatables.net';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private _svc: TaskService) { 
  	//this.selected = [this.tasks[0]];
  	//this._svc.selectedTask = [this.tasks[0]];
   this._svc.getTasks((data) => {
      this.tasks = data;
      this._svc.selectedTask = [this.tasks[0]];
      this.selected = [this.tasks[0]];
      this._svc.taskSelected.emit(this.selected)
      //console.log(this.selected);
   })
 

  }

  
  selected = [];

  tasks = null;
/*
   tasks = [

  	{
  		"task_id": 'ISU-10',
  		"title": "Set up 10 computers",
  		"officer": "Roberto Diaz",
  		"priority": 2,
  		"assigned_date": "02/10/2018",
  		"due_date": "16/10/2018",
  		"metrics": []

  	},
  	{
  		"task_id": 'ISU-20',
  		"title": "Enter 2 years of ESSJ data",
  		"officer": "Sean McNaughton",
  		"priority": 0,
  		"assigned_date": "02/10/2018",
  		"due_date": "16/10/2018",
  		"metrics": []

  	},
  	{
  		"task_id": 'ISU-30',
  		"title": "Build app for ECM",
  		"officer": "Princeton Ebanks",
  		"priority": 1,
  		"assigned_date": "02/10/2018",
  		"due_date": "16/10/2018",
  		"metrics": []

  	},
  	{
  		"task_id": 'ISU-40',
  		"title": "Order New SAN",
  		"officer": "Trevor Budd",
  		"priority": 0,
  		"assigned_date": "02/10/2018",
  		"due_date": "16/10/2018",
  		"metrics": []

  	},
  	{
  		"task_id": 'ISU-50',
  		"title": "Fix DGs Computer",
  		"officer": "Aisnworth Dougherty",
  		"priority": 1,
  		"assigned_date": "02/10/2018",
  		"due_date": "16/10/2018",
  		"metrics": []

  	}
  ];*/

 @Output() taskSelected: EventEmitter<any> = new EventEmitter();

  ngOnInit() {



  }


  /*getTasks(cb){

    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/tasks.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }*/


  onSelect(task){
  	//console.log(task);
  	this.taskSelected.emit(task);
  }



  getPriorityString(priority: any){
  	switch(priority)
  	{
  		case 0:
  			return "Critical";
  		
  		case 1:
  			return "High";
  		
  		case 2:
  			return "Medium";
  		
  		case 3:
  			return "Low";
  		

  	}


  }

  getPriorityClass(priority: any){
  	switch(priority)
  	{
  		case 0:
  			return "badge badge-default badge-danger";
  		
  		case 1:
  			return "badge badge-default badge-warning";
  		
  		case 2:
  			return "badge badge-default badge-primary";
  		
  		case 3:
  			return "badge badge-default badge-info";
  		
  	}
  }


}
