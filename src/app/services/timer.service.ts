import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  countdown:number = 0;
  interval: any;
  timerStreaming: BehaviorSubject<number> = new BehaviorSubject<any>(null);

  constructor() { }

  timerStatus(seconds:number,type:string): void {
    console.log('type::',type);
    if(type ==='start'){
      console.log('TTYY START:');
      this.countdown = seconds;
      console.log('seconds::',seconds,this.countdown);
      this.interval = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
          this.timerStreaming.next(this.countdown); // Emit new value
        } else {
          clearInterval(this.interval);
          // this.timerStreaming.next(this.countdown); // Emit new value
        }
        console.log('seconds:: interval',seconds,this.countdown);
      }, 1000); // Update countdown every second (1000 milliseconds)
    }else{
      this.timerStreaming.next(0); // Emit new value
      console.log('TTYY STOP:');
      clearInterval(this.interval);
    }

  }
}
