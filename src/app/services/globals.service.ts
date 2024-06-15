import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  globals: BehaviorSubject<any> = new BehaviorSubject<any>('');
  sidebarView: any = false;

  constructor() { }
  // youtube channel
  changeSideBar(flag:any): void {
    this.sidebarView = flag;
    this.globals.next(flag);
  }
}
