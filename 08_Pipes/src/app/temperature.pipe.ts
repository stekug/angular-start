import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturPipe implements PipeTransform {
  transform(value: string | number) {
    let val: number;

    // Check if value is string, if - transform it
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    const outputTemp = val * (9 / 5) + 32;

    return `${outputTemp} °F`;
  }
}
