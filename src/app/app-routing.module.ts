import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { MainTaskComponent} from './main-task/main-task.component';
import {TaskDetailComponent } from './task-list/task-detail/task-detail.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';

const routes: Routes = [
{path: 'tasks', component: MainTaskComponent},

{path: 'tasks/:id', component: TaskDetailComponent},
{path: 'tasks/:id/assign', component: AssignTaskComponent}

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule{
	
}