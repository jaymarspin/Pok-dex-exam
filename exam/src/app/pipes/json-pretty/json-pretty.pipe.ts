import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonPretty'
})
export class JsonPrettyPipe implements PipeTransform {
//sample custom pipe
  transform(object: any): any {
    const tmp = JSON.stringify(object,null,'\t')
    return tmp;
  }

}
