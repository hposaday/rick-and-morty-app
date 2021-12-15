import { CharacterService } from './../services/character.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EpisodesDialogComponent } from '../episodes-dialog/episodes-dialog.component';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters: Array<any> = [];
  nextCharacterPage: string = '';
  searchName: string = '';

  constructor(
    private characterService: CharacterService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCharacterPage();
  }

  onScroll() {
    this.getCharacterPage(this.nextCharacterPage);
  }

  openDialog(character) {
    character.episode = character.episode.map((element) => {
      const episodeId = element.split('/')[5];
      return { id: episodeId, url: element };
    });
    console.log(character, 'character');
    this.dialog.open(EpisodesDialogComponent, {
      data: character,
      minWidth: 450,
      closeOnNavigation: true,
    });
  }

  getCharacterPage(urlRequest: string = '') {
    console.log(this.characters);
    this.characterService.getCharacters(urlRequest).subscribe((response) => {
      this.nextCharacterPage = response.info.next;
      const additionalCharacters = response.results.map(
        ({ name, species, status, gender, image, episode }) => ({
          name,
          species,
          status,
          gender,
          image,
          episode,
        })
      );
      this.characters = [...this.characters, ...additionalCharacters];
    });
  }
}
