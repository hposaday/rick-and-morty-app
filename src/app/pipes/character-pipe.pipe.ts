import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterPipe',
  pure: false,
})
export class CharacterPipePipe implements PipeTransform {
  transform(characters: any[], filter: any): any {
    console.log(characters, filter);
    if (!characters || !filter) {
      return characters;
    }

    return characters.filter((character) =>
      character.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  }
}
