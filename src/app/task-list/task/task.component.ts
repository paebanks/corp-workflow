import { Component, OnInit, Input} from '@angular/core';
import {TaskService } from '../../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  

  constructor(private _svc: TaskService) {

  }

  @Input() view: String;
  @Input() assignedTask = null;
 
  task: any = null;
  

  ngOnInit() {
    console.log('TaskComponent created');

    //if task is been used as a child component, assign task externally
    if(this.assignedTask !== null){
       this.task = this.assignedTask;
       console.log('task assigned externally in onInint'); 
    }
    //assign initially selected task in task list (first)
    this.task = this._svc.selectedTask;
    
    //update selected task when user selects a task from list
    this._svc.taskSelected.subscribe(
      (data) => {
        this.task = data;
        console.log('from TaskComponent');
        console.log(this.task);
      },

      error => console.log('error')
    )


  }

  /*ngAfterViewInit(){
    console.log('external assignment needed');
    //assign task externally
    if(this.assignedTask !== null){
       this.task = this.assignedTask;
       console.log('task assigned externally in afterViewInit'); 
    }

  }*/

}
