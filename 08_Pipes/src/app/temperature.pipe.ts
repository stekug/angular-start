import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return value + ' - transformed';
  }
}
