import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task-list/task/task.component';
import { MainTaskComponent } from './main-task/main-task.component';
import { TaskDetailComponent } from './task-list/task-detail/task-detail.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AssignTaskComponent } from './assign-task/assign-task.component';

//import { RouterModule, Routes} from '@angular/router';
import {AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    MainTaskComponent,
    TaskDetailComponent,
    AssignTaskComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    NgxDatatableModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
