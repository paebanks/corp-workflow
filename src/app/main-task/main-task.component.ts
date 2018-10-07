import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css']
})
export class MainTaskComponent implements OnInit {

  constructor(private _svc: TaskService) { }

  ngOnInit() {
  }

  setSelectedTask(task){
  	//console.log(task);
  	this._svc.selectedTask = task.selected;
  	this._svc.taskSelected.emit(task.selected);
  }

}
