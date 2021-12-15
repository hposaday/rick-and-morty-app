import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private serverUrl: string = 'https://rickandmortyapi.com/api';
  constructor(private httpClient: HttpClient) {}

  getCharacters(urlRequest: string): Observable<any> {
    urlRequest = urlRequest === '' ? `${this.serverUrl}/character` : urlRequest;
    return this.httpClient.get(urlRequest);
  }

  getCharacter(characterId): Observable<any> {
    return this.httpClient.get(`${this.serverUrl}/character/${characterId}`);
  }
}
