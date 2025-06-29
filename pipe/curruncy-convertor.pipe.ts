import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'curruncyConvertor'
})
export class CurruncyConvertorPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return "Rs." +  value * 68;
  }

}
