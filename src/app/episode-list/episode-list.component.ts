import { CharactersDialogComponent } from './../characters-dialog/characters-dialog.component';
import { EpisodeService } from './../services/episode.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss'],
})
export class EpisodeListComponent implements OnInit {
  episodes: Array<any> = [];
  nextEpisodesPage: string = '';
  searchName: string = '';
  constructor(
    private episodeService: EpisodeService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getEpisodePage();
  }

  onScroll() {
    this.getEpisodePage(this.nextEpisodesPage);
  }

  openDialog(episode) {
    episode.characters = episode.characters.map((character) => {
      const characterId = character.split('/')[5];
      return { id: characterId, url: character };
    });

    this.dialog.open(CharactersDialogComponent, {
      data: episode,
      minWidth: 450,
      closeOnNavigation: true,
    });
  }

  getEpisodePage(urlRequest: string = '') {
    console.log(this.episodes);
    this.episodeService.getEpisodes(urlRequest).subscribe((response) => {
      this.nextEpisodesPage = response.info.next;
      const additionalEpisodes = response.results;
      this.episodes = [...this.episodes, ...additionalEpisodes];
    });
  }
}
