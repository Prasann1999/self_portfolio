import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { ProjestsComponent } from './projests/projests.component';
import { WeatherComponent } from './weather/weather.component';
import { TodoComponent } from './todo/todo.component';
import { CvComponent } from './cv/cv.component';

// const routes: Routes = [];

const routes: Routes = [{
  path: 'projects/timer',
  component: TimerComponent,
},
{
  path: 'projects',
  component: ProjestsComponent,
},
{
  path: 'projects/weather',
  component: WeatherComponent
},
{
  path: 'projects/todo',
  component: TodoComponent
},
{
  path: 'projects/prasann-patil-senior-web-dev-resume',
  component: CvComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
