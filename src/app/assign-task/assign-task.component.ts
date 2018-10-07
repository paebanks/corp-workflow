import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-assign-task',
	templateUrl: "assign-task.component.html",
	styleUrls: ["./assign-task.component.css"]
})
export class AssignTaskComponent implements OnInit{


	users = [];
	id;
	task;
	staffID = null;
	selectedName = "";
	selectedUser;
	validUserSelected = false;
	
	constructor(private _svc: TaskService, private route: ActivatedRoute){

		//get task id from route parameter
	  	this.route.params
	  	.subscribe((data) => 
	  		{
	  			this.id = data['id'];
	  			//console.log(this.id);
	  		}	
	    );

	    this._svc.getTasks((data) =>{
  			const tasks  = data;
  			this.task = tasks.filter((task) => task.task_id === this.id);
  			console.log('from AssignTaskComponent');
  			console.log(this.task);
  		});

	  	this._svc.getUsers((data) =>{
	  		//const tasks  = data;
	  		this.users = data;
	  		//console.log(this.users);
	  	})


	}


	ngOnInit(){
	}

	handleDrag(evt){
		console.log('drag started');
	}

	

	getSelectedUser(evt){
		 console.log('in selected user function');
		// return this.staffID !== null ? 
		// this.users.filter((user) => user.user_id === this.staffID).pop().firstname : "" 
		//get selected user name when correct number of characters tyed in
		
		if(this.staffID !== null){
			if(this.staffID.length === 5)
			{
				const selectedUser = this.users.filter((user) => user.user_id === this.staffID)[0]

				if(selectedUser){
					this.validUserSelected = true;
					this.selectedUser = selectedUser;
				}
				console.log(selectedUser);
				this.selectedName = selectedUser.firstname + " " + selectedUser.surname;

				return this.selectedName;
			}
		}

		return "";
	}

	assignTaskToUser(){
		console.log('task assigned to ' + this.selectedName);

		//push task id unto list of user's tasks
		this.selectedUser.tasks.push(this.task.task_id);

		//make AJAX call to update user record
		
	}

}