import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ContentModule } from '../content/content.module';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { MatTreeModule } from '@angular/material/tree';
import { SliderModule } from '../slider/slider.module';
import { ListModule } from '../list/list.module';
import { ProjectsModule } from '../projects/projects.module';


@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    SidebarContentComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    NgbModule,
    ContentModule,
    MatButtonModule,
    MatTreeModule,
    SliderModule,
    ListModule,
    ProjectsModule
  ],
  exports: [
    HomepageComponent,
    SidebarContentComponent
  ]
})
export class HomeModule { }
