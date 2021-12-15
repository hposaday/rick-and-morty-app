import { EpisodeListComponent } from './episode-list/episode-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CharacterListComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: 'episodes', component: EpisodeListComponent },
  { path: 'episode/:id', component: EpisodeDetailComponent },
  { path: 'character/:id', component: CharacterDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
