import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secToHms'
})
export class SecToHmsPipe implements PipeTransform {

  transform(value: number): string {
    const hours: number = Math.floor(value / 3600);
    const minutes: number = Math.floor((value % 3600) / 60);
    const seconds: number = Math.floor(value % 60);

    const hoursDisplay = hours > 0 ? hours + 'h ' : '';
    const minutesDisplay = minutes > 0 ? minutes + 'm ' : '';
    const secondsDisplay = seconds > 0 ? seconds + 's' : '';
    return `${hoursDisplay} ${minutesDisplay} ${secondsDisplay}`;
  }

}
