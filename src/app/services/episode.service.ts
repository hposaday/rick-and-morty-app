import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EpisodeService {
  private serverUrl: string = 'https://rickandmortyapi.com/api';
  constructor(private httpClient: HttpClient) {}

  getEpisodes(urlRequest: string): Observable<any> {
    urlRequest = urlRequest === '' ? `${this.serverUrl}/episode` : urlRequest;
    return this.httpClient.get(urlRequest);
  }

  getEpisode(episodeId: string): Observable<any> {
    return this.httpClient.get(
      `https://rickandmortyapi.com/api/episode/${episodeId}`
    );
  }
}
