import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicador'
})
export class MultiplicadorPipe implements PipeTransform {
  transform(valorRecibido: number, factor: string): number {
    return (valorRecibido * parseFloat(factor));
  }
}
