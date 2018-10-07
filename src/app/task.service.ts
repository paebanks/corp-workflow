import { Injectable, EventEmitter, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  selectedTask = null;

  @Output() taskSelected: EventEmitter<any> = new EventEmitter();



  getTasks(cb){

  	const req = new XMLHttpRequest();
    req.open('GET', `assets/data/tasks.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }


  getTask(cb, task_id){
 	const req = new XMLHttpRequest();
    req.open('GET', `assets/data/tasks.json`);

    req.onload = () => {
      cb(JSON.parse(req.response).filter(task => task.task_id === task_id));
    };

    req.send();

  }


  getUsers(cb){
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/users.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();

  }


  updateUser(){

    const req =  new XMLHttpRequest();
    const params = "user_id="
    req.open('PUT', `assets/data/users.json`);

    req.onload = () => {

    }

    req.send()
  }


  createUser(user){
    
    const req =  new XMLHttpRequest();
    const params = 'user_id="' + user.user_id + '"&surname="' + user.surname
    + '"&firstname="' + user.firstname + '"&department="' + user.department
    + '"&image_url="' + user.image_url;
    
    req.open('POST', `assets/data/users.json`);

    req.setRequestHeader('Content-Type', 'application/json');

    req.onload = () => {
      //cb(JSON.parse(req.response));
      console.log(req.response);
    }

    req.send(params);
    
    //console.log(user);

  }

  
}
