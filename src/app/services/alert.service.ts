import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  channelAlert: BehaviorSubject<object> = new BehaviorSubject<object>({});
  alerttype: any = '';

  constructor() { }
  // youtube channel
  changeAlertType(message: string, alertType: any): void {
    this.channelAlert.next({
      message,
      alertType
    }); // Emit new value
  }
}
