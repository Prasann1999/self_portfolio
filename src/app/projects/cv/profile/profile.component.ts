import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../cv.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  @Input() resume:any = {};
  @Input() selectedValue:any = 'profile_id';
  @Input() from:any = 'cv';
  ngOnInit(): void {
  }

}
