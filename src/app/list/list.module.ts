import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListingComponent } from './listing/listing.component';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SdpComponent } from './sdp/sdp.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalsModule } from '../modals/modals.module';
import { MatIconModule } from '@angular/material/icon';
import { RatingStarsComponent } from './sdp/rating-stars/rating-stars.component';


@NgModule({
  declarations: [
    ListingComponent,
    CardComponent,
    SdpComponent,
    RatingStarsComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatCardModule,
    MatButtonModule,
    NgbRatingModule,
    MatIconModule,
  ],
  exports:[
    ListingComponent,
    CardComponent,
    SdpComponent,
    RatingStarsComponent
  ]
})
export class ListModule { }
