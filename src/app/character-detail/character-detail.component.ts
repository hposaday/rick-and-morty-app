import { CharacterService } from './../services/character.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService
  ) {}
  characterData;
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.characterService.getCharacter(id).subscribe((response) => {
      console.log(response);

      response.episode = response.episode.map((element) => {
        const episodeId = element.split('/')[5];
        return { id: episodeId, url: element };
      });

      this.characterData = response;
    });
  }
}
