import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Phrase } from '../phrase';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PhraseService {
  // private glossaryUrl = 'http://localhost:8080/glossary/v1/phrases';  // URL to web api
  private glossaryUrl = 'api/phrases';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET Phrases from the server */
  getPhrases(): Observable<Phrase[]> {
    console.log('PhraseService.getPhrases...');

    return this.http.get<Phrase[]>(this.glossaryUrl, httpOptions)
    .pipe(
      tap(phrases => console.log('fetched ' + phrases.length + ' phrases')),
      catchError(this.handleError('PhraseService.getPhrases', []))
  );
  }

  deletePhrase(phrase: Phrase | number) {
    const id = typeof phrase === 'number' ? phrase : phrase.id;
    const url = `${this.glossaryUrl}/${id}`;

    return this.http.delete<Phrase>(url, httpOptions);
  }

  insertPhrase (phrase: Phrase): Observable<Phrase> { // Check status code and refresh view with call to db
    return this.http.post<Phrase>(this.glossaryUrl, phrase, httpOptions);
  }

  /** POST: update the phrase on the server */
  updatePhrase (phrase: Phrase): Observable<any> {
    return this.http.post(this.glossaryUrl, phrase, httpOptions);
  }

  getPhrase(id: number): Observable<Phrase> {
    const url = `${this.glossaryUrl}/${id}`;
    return this.http.get<Phrase>(url);
  }

  /* GET phrases whose name contains search term */
  searchPhrases(term: string): Observable<Phrase[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    // To be adapted to backend fulltext query
    return this.http.get<Phrase[]>(`${this.glossaryUrl}/?acronym=${term}`);
  }



/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
