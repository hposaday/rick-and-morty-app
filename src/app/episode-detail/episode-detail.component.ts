import { EpisodeService } from './../services/episode.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss'],
})
export class EpisodeDetailComponent implements OnInit {
  episodeData;
  constructor(
    private activatedRoute: ActivatedRoute,
    private episodeService: EpisodeService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.episodeService.getEpisode(id).subscribe((response) => {
      console.log(response);

      response.characters = response.characters.map((character) => {
        const characterId = character.split('/')[5];
        return { id: characterId, url: character };
      });

      this.episodeData = response;
    });
  }
}
