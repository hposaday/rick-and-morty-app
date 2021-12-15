import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'episodePipe',
  pure: false,
})
export class EpisodePipe implements PipeTransform {
  transform(episodes: any[], filter: any): any {
    console.log(episodes, filter);
    if (!episodes || !filter) {
      return episodes;
    }

    return episodes.filter((character) =>
      character.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  }
}
