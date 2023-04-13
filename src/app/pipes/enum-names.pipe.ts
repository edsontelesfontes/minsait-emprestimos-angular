import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'enumNames' })
export class EnumNamesPipe implements PipeTransform {
  transform(value: any): any {
    return Object.keys(value)
      .filter(key => isNaN(Number(value[key])))
      .map(key => value[key]);
  }
}
