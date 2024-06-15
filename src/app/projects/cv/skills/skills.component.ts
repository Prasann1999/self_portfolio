import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['../cv.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  @Input() resume:any = {};
  @Input() selectedValue:any = 'profile_id';
  ngOnInit(): void {
  }

}
