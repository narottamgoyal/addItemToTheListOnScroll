import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customfilterPipe'
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: any, funcName: any): any {
        if (!items || !filter) {
            return items;
        }
        return funcName(items, filter);
    }
}
