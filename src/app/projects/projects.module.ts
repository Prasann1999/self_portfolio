import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { TimerComponent } from './timer/timer.component';
import { MatButtonModule } from '@angular/material/button';
import { SecToHmsPipe } from '../pipes/sec-to-hms.pipe';
import { ProjestsComponent } from './projests/projests.component';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { WeatherComponent } from './weather/weather.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TodoComponent } from './todo/todo.component';
import { MatIconModule } from '@angular/material/icon';
import { CvComponent } from './cv/cv.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ProfileComponent } from './cv/profile/profile.component';
import { AboutComponent } from './cv/about/about.component';
import { ExperienceComponent } from './cv/experience/experience.component';
import { SkillsComponent } from './cv/skills/skills.component';
import { EducationComponent } from './cv/education/education.component';

// import { CvComponent } from './cv/cv.component';

@NgModule({
  declarations: [
    TimerComponent,
    SecToHmsPipe,
    ProjestsComponent,
    CardComponent,
    WeatherComponent,
    TodoComponent,
    CvComponent,
    ProfileComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    // CvComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    NgbDropdownModule,
    MatSelectModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FormsModule,
    MatButtonToggleModule
  ],
  exports:[
    TimerComponent,
    ProjestsComponent,
    CardComponent,
    WeatherComponent,
    TodoComponent,
    CvComponent,
    ProfileComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
  ]
})
export class ProjectsModule { }
