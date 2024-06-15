import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['../cv.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }
  @Input() resume:any = {};
  @Input() selectedValue:any = 'profile_id';
  @Input() from:any = 'cv';
  ngOnInit(): void {
  }

}
