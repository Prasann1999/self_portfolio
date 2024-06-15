import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  host: {
    'class': 'custom-class-timer'
  }
})
export class TimerComponent implements OnInit {
  timeInput = 0;
  timerStart = false;
  getValue(value: any) {
    console.log(value);
    if (value) {
      this.timeInput = parseInt(value);
    }
  }
  stopTimer() {
    this.timerStart = false;
    this.timerStreaming.timerStatus(0, 'stop');
    this.timeInput = 0;
  }
  startTimer() {
    console.log('startTimer', this.timeInput);
    if (this.timeInput < 1) {
      this.alertChannel.changeAlertType('Please enter time more than 0', 'danger');
      return
    }
    this.timerStart = true;
    this.timerStreaming.timerStatus(this.timeInput, 'start');
  }
  @Input() from = 'link';
  constructor(
    private timerStreaming: TimerService,
    private alertChannel: AlertService,
  ) { }

  ngOnInit(): void {
    this.timerStreaming.timerStreaming.subscribe((val: any) => {
      console.log('timerStreaming:val', val);
      this.timeInput = val;
      if (val < 1) {
        if (this.timerStart) {
          this.alertChannel.changeAlertType('timer is over', 'warning');
        }
        this.timerStart = false;
      } else {
        this.timerStart = true;
      }
    });
    console.log('link::', window.location.pathname);
  }

}
