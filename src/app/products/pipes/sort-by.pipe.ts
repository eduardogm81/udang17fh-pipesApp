import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from "../interfaces/hero.interface";

@Pipe({
  name: 'sortBy'
})

export class SortByPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy?: keyof Hero | ''): any {
    switch (sortBy) {
      case 'name':
        return heroes.sort((a,b) => (a.name > b.name) ? 1 : -1);
        // return heroes.sort((a, b) => a.name.localeCompare(b.name));
      case 'canFly':
        return heroes.sort((a,b) => (a.canFly > b.canFly) ? 1 : -1);
        // return heroes.sort((a, b) => a.canFly === b.canFly ? 0 : a.canFly ? -1 : 1);
      case 'color':
        return heroes.sort((a,b) => (a.color > b.color) ? 1 : -1);
        // return heroes.sort((a, b) => a.color - b.color);
      default:
          return heroes;
    }
  }
}
