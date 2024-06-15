import { Component, OnInit } from '@angular/core';
import { SkillListService } from 'src/app/services/skill-list.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  skillsList: any = [];
  constructor(
    private skillService: SkillListService,
  ) { }

  ngOnInit(): void {
    this.skillsList = this.skillService.skillData;
    console.log('this.skillsList::', this.skillsList);
  }

}
