import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(minutesStr: string | undefined): string {

      // Check if the input is undefined
  if (minutesStr === undefined) {
    return 'No input provided';
  }
    // Convert string to number
    const minutes = parseInt(minutesStr, 10);

    // Check if the conversion was successful
    if (isNaN(minutes)) {
      return 'Invalid input';
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) {
      return `${remainingMinutes} min`;
    } else if (remainingMinutes === 0) {
      return `${hours} hr`;
    } else {
      return `${hours} hr ${remainingMinutes} min`;
    }
  }
}
