import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customfilterPipe'
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => (item.no + '').indexOf(filter) !== -1);
    }
}
