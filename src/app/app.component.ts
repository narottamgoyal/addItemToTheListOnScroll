import { Component } from '@angular/core';
import { Data } from './Data';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public numberFilterValue: any;
  public firstNameFilterValue: any;
  public lastNameFilterValue: any;
  public clientList = Data.peopeList;

  /**
   * numberFilter
   */
  public numberFilter(items: any[], filter: any): any {
    return items.filter(item => (item.no + '').indexOf(filter) !== -1);
  }

  /**
   * firstNameFilter
   */
  public firstNameFilter(items: any[], filter: any): any {
    return items.filter(item => item.firstName.toLowerCase().indexOf(filter) !== -1);
  }

  /**
   * lastNameFilter
   */
  public lastNameFilter(items: any[], filter: any): any {
    return items.filter(item => item.lastName.toLowerCase().indexOf(filter) !== -1);
  }
}
