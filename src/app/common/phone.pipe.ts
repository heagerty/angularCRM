import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value === 'string') {
      let formatted = '';
      let chaine = value as string;
      while (chaine.length > 2) {
        formatted += chaine.slice(0,2);
        formatted += ' ';
        chaine = chaine.slice(2);
      }
      formatted += chaine;
      return formatted;
    }
    return value;
  }

}
