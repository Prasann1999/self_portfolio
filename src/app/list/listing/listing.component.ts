import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { FilterComponent } from 'src/app/modals/filter/filter.component';
import { SkillListService } from 'src/app/services/skill-list.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  skillList: any = [];
  constructor(private router: Router,
    private skillsList: SkillListService,
    private wishListService: WishlistService,
    public dialog: MatDialog
  ) { }
  filterClick(type:any): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'custom-filter-modal'; // Apply custom CSS class
    dialogConfig.data = {
      dataKey: type
    }
    const dialogRef = this.dialog.open(FilterComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  @Input() from: string = 'list'
  ngOnInit(): void {
    this.skillsList.myObservableSkill.subscribe((val) => {
      console.log('subs testt emitted val', val, 'this.from::', this.from, 'this.wishListService.wishList', this.wishListService.wishList);
      if (this.from === 'wishlist') {
        this.skillList = this.wishListService.wishList;
      } else {
        if (this.from === 'home') {
          this.skillList = val?.slice(0, 6);
        } else {
          this.skillList = val;
        }

      }

    })
    if (this.from === 'list') {
      this.skillList = this.skillsList.skillDataFilter;
    } else if (this.from === 'wishlist') {
      console.log('TEST444', this.wishListService.wishList);
      this.skillList = this.wishListService.wishList
    }
    console.log('TEST444 tt wishlist', this.from, 'this.skillList::', this.skillList);
  }
}
