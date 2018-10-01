import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Phrase } from '../phrase';
import { PHRASES } from '../mock-data';

// import { Http } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PhraseService {
  // private glossaryUrl = 'glossary/v1/phrases';  // URL to web api
  private glossaryUrl = 'api/phrases';  // URL to web api

  constructor( private http: HttpClient) { }

  /** GET ACRONYMS from the server */
  getPhrases(): Observable<Phrase[]> {
    // return of(PHRASES);
    console.log('phrase.service.getPhrases...');
    const ret = this.http.get<Phrase[]>(this.glossaryUrl, httpOptions);
    console.log(ret);
    return ret;
  }

  deletePhrase(phrase: Phrase | number) {
    const id = typeof phrase === 'number' ? phrase : phrase.id;
    const url = `${this.glossaryUrl}/${id}`;

    return this.http.delete<Phrase>(url, httpOptions);
  }

  addPhrase (phrase: Phrase): Observable<Phrase> {
    return this.http.post<Phrase>(this.glossaryUrl, phrase, httpOptions);
  }

  getPhrase(id: number): Observable<Phrase> {
    const url = `${this.glossaryUrl}/${id}`;
    return this.http.get<Phrase>(url);
  }
}
