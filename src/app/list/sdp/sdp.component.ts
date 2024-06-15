import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogComponent } from 'src/app/modals/dialog/dialog.component';
import { AlertService } from 'src/app/services/alert.service';
import { SkillListService } from 'src/app/services/skill-list.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-sdp',
  templateUrl: './sdp.component.html',
  styleUrls: ['./sdp.component.css']
})
export class SdpComponent implements OnInit {

  skillName: string = "";
  skillList: object[] = [];
  skillListSelected: any = [];
  panelOpenState = false;
  values = '';

  bgColorStyleBinding = 'green';
  bgColorStyleBindingLogo = 'green';
  lightTitle = 'green';

  getRandomDarkColor():string {
    const randomValue = () => Math.floor(Math.random() * 128); // Generates a number between 0 and 127
    const r = randomValue();
    const g = randomValue();
    const b = randomValue();
    return `rgb(${r}, ${g}, ${b})`;
  }
  getRandomLightColor() {
    const randomValue = () => Math.floor(Math.random() * 128) + 128; // Generates a number between 128 and 255
    const r = randomValue();
    const g = randomValue();
    const b = randomValue();
    return `rgb(${r}, ${g}, ${b})`;
  }
  


  wishList(skill:any){
    this.alertService.changeAlertType('Added to wishlist', 'success');
    console.log('wishlist clicked',skill);
    this.wishListService.addToList(skill);
  }

  removeWishList(skill:any){
    this.alertService.changeAlertType('removed from wishlist successfully', 'warning');
    this.wishListService.removeFromList(skill);
  }

  constructor(
    private route: ActivatedRoute,
    private skillsList: SkillListService,
    public dialog: MatDialog,
    private wishListService: WishlistService,
    private alertService: AlertService,
  ) { }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'custom-support-modal'; // Apply custom CSS class
    // dialogConfig.panelClass = 'custom-dialog-support'; // Apply custom CSS class
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
    const doc = document.getElementById('my_name_header_scroll');
    if(doc){
      doc.scrollIntoView();
    }

    this.bgColorStyleBinding = this.getRandomDarkColor();
    this.bgColorStyleBindingLogo = this.getRandomDarkColor();
    this.lightTitle = this.getRandomLightColor();

    // Get the skillName parameter from the URL
    this.route.params.subscribe(params => {
      this.skillName = params['skillName'];
    });
    console.log('this.skillName::',this.skillName);
    console.log('SDP this.route.params::', this.skillListSelected);
    // this.openDialog();

    this.skillsList.myObservableSkill.subscribe((val) => {
      this.skillList = val;
      this.skillListSelected = this.skillsList.skillData?.find((elem: any, index: any) => elem?.id?.toString() === this.skillName?.toString());
      console.log('this.skillListSelected::',this.skillListSelected,'this.skillsList.skillData:',this.skillsList.skillData);
    })
  }

}
