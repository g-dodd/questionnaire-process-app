import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusToText'
})
export class StatusToTextPipe implements PipeTransform {

    transform(status: number): string {

        switch (status) {
            case 0:
                return 'No Report'
            case 1:
                return 'Loaded';
            case 2:
                return 'Pending';
            case 3:
                return 'Completed';
            case 4:
                return 'Submitted';
            default:
                return 'Unknown Status';
        }
  }

}
