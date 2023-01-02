import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, filterString: any) {
    if (filterString == '') {
      return value;
    }
    const notes = [];
    for (const note of value) {
      if (note['title'].toLowerCase().includes(filterString.toLowerCase()) | note.description.toLowerCase().includes(filterString.toLowerCase())) {
        notes.push(note);
      }
    }
    return notes;

  }

}