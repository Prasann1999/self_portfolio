import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../cv.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  @Input() resume:any = {};
  @Input() selectedValue:any = 'profile_id';
  @Input() from:any = 'cv';
  ngOnInit(): void {
  }

}
