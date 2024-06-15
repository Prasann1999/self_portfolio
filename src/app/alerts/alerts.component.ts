import { Component, OnInit } from '@angular/core';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})

export class AlertsComponent implements OnInit {
  alertType = '';
  alerts = [
    {
      type: 'success',
      message: 'This is an success alert',
      show: false,
    },
    {
      type: 'info',
      message: 'This is an info alert',
      show: false,
    },
    {
      type: 'warning',
      message: 'This is a warning alert',
      show: false,
    },
    {
      type: 'danger',
      message: 'This is a danger alert',
      show: false,
    },
    {
      type: 'primary',
      message: 'This is a primary alert',
      show: false,
    },
    {
      type: 'secondary',
      message: 'This is a secondary alert',
      show: false,
    },
    {
      type: 'light',
      message: 'This is a light alert',
      show: false,
    },
    {
      type: 'dark',
      message: 'This is a dark alert',
      show: false,
    },
  ];
  close(alert: any) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
  reset() {
    this.alerts = Array.from(this.alerts);
  }

  constructor(
    private alertService: AlertService,
  ) {

  }

  ngOnInit(): void {
    // subscribe to alert channel
    this.alertService.channelAlert.subscribe((val: any) => {
      const { alertType, message } = val;
      this.alertType = alertType;
      // console.log('val::val');
      if (alertType?.length > 0) {
        this.alerts = this.alerts.map((elem, index) => {
          if (alertType === elem?.type) {
            return {
              ...elem,
              message: message,
              show: true,
            }
          } else {
            return {
              ...elem,
              show: false,
            }
          }

        })
      }
      setTimeout(() => {
        this.alerts = this.alerts.map((elem, index) => {
          return {
            ...elem,
            show: false,
          }
        })
      }, 5000);
    });
  }

}
