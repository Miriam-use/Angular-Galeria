import { Pipe, PipeTransform } from '@angular/core';
import { Imagen } from './models/imagen';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  imagenes: Imagen[] = [];

  public diacriticsMap: any = {};

  constructor() {
    for (var i = 0; i < this.imagenes.length; i++) {
      var letters = this.imagenes[i].name;
      for (var j = 0; j < letters.length; j++) {
        this.diacriticsMap[letters[j]] = this.imagenes[i].name;
      }
    }
  }

  transform(items: any[], searchText: string): any {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = this.removeDiacritics(searchText.toLowerCase());

    return items.filter(it => {
      return this.removeDiacritics(it.toLowerCase()).includes(searchText);
    });
  }

  public removeDiacritics(str): string {
    return str.replace(/[^\u0000-\u007E]/g, function(a) {
      return this.diacriticsMap[a] || a;
    }.bind(this));
  }

}
