import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {
  transform(value: Array<any>, filtro: string): any {
    if (filtro) {

      return value.filter(a => {
        a.nome.indexOf(filtro) >= 0
      });
    } else {
      return value;
    }
  }
}
