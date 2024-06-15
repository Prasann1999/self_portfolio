import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import {MatSliderModule} from '@angular/material/slider'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HomeModule } from './home/home.module';
import { ListModule } from './list/list.module';
import { ContentModule } from './content/content.module';
import { ModalsModule } from './modals/modals.module';
import {MatDialogModule} from '@angular/material/dialog';
import { AlertsComponent } from './alerts/alerts.component';
import { WishlistComponent } from './wishlist/wishlist.component'
import { ProjectsModule } from './projects/projects.module';
import { SecToHmsPipe } from './pipes/sec-to-hms.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarModalComponent } from './sidebar-modal/sidebar-modal.component';
import { SliderModule } from './slider/slider.module';

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent,
    WishlistComponent,
    NavbarComponent,
    SidebarModalComponent,
    // SecToHmsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    // MatToolbar,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    MatButtonModule,
    NgbModule,
    MatSidenavModule,
    HomeModule,
    NgbCarouselModule,
    ListModule,
    ContentModule,
    ModalsModule,
    MatDialogModule,
    ProjectsModule,
    HttpClientModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
