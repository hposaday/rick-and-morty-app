import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CharacterListComponent } from './character-list/character-list.component';
import { EpisodesDialogComponent } from './episodes-dialog/episodes-dialog.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { CharacterPipePipe } from './pipes/character-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { CharactersDialogComponent } from './characters-dialog/characters-dialog.component';
import { EpisodePipe } from './pipes/episode.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharacterListComponent,
    EpisodesDialogComponent,
    EpisodeDetailComponent,
    CharacterPipePipe,
    CharacterDetailComponent,
    EpisodeListComponent,
    CharactersDialogComponent,
    EpisodePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
