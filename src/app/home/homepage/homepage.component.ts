import { Component, OnInit } from '@angular/core';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  host: {
    'class': 'custom-class-component_common'
  }
})
export class HomepageComponent implements OnInit {
  showFiller = false;
  sideBarView = false;
  constructor(
    private globalsService : GlobalsService,
  ) { }

  ngOnInit(): void {
    this.globalsService.globals.subscribe((val)=>{
      this.sideBarView = val;
    })

  }

}
