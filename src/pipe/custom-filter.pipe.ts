import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(items: any[], ...args: any[]): any {
    var filter = args[0];
    var funcName = args[1];
    if (!items || !filter) {
      return items;
    }
    return funcName(items, filter);
  }
}
