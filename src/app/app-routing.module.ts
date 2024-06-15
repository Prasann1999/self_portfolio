import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ListingComponent } from './list/listing/listing.component';
import { SdpComponent } from './list/sdp/sdp.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home page
  { path: '', component: HomepageComponent },
  { path: 'skills', component: ListingComponent },
  { path: 'skills/:skillName', component: SdpComponent },
  { path: 'save-for-later', component: WishlistComponent }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
