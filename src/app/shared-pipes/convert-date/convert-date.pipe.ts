import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
  name: 'convertDate'
})
export class ConvertDatePipe implements PipeTransform {

  transform(rawDate: string): any {
      return moment(rawDate, moment.ISO_8601).format("MM/DD/YYYY");
  }

}
