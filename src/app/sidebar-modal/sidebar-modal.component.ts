import { Component, Input, OnInit } from '@angular/core';
import { GlobalsService } from '../services/globals.service';

@Component({
  selector: 'app-sidebar-modal',
  templateUrl: './sidebar-modal.component.html',
  styleUrls: ['./sidebar-modal.component.css']
})
export class SidebarModalComponent implements OnInit {
  openSideBar = false;
  closeClick() {
    this.globalsService.changeSideBar(false);
  }
  // @Input() openSideBar: any = false;
  constructor(
    private globalsService: GlobalsService
  ) { }

  ngOnInit(): void {
    this.globalsService.globals.subscribe((val: any) => {
      console.log('timerStreaming:val', val);
      this.openSideBar = val;
    });
  }

}
