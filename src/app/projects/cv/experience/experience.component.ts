import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['../cv.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }
  @Input() resume:any = {};
  @Input() selectedValue:any = 'profile_id';
  ngOnInit(): void {
  }

}
