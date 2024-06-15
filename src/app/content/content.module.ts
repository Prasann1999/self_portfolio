import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { DataContainerComponent } from './data-container/data-container.component';
import { CoursalComponent } from './coursal/coursal.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import { ListModule } from '../list/list.module';
import { ProjectsModule } from '../projects/projects.module';

@NgModule({
  declarations: [
    DataContainerComponent,
    CoursalComponent,
    TabsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    ListModule,
    ProjectsModule
  ],
  exports:[
    DataContainerComponent,
    CoursalComponent,
    TabsComponent,
    FooterComponent
  ]
})
export class ContentModule { }
