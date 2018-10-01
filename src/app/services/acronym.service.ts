import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Acronym } from '../acronym';
import { ACRONYMS } from '../mock-data';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AcronymService {
  private glossaryUrl = 'glossary/v1/phrases';  // URL to web api

  constructor( private http: HttpClient) { }

  /** GET ACRONYMS from the server */
  getAcronyms(): Observable<Acronym[]> {
    return of(ACRONYMS);
    // return this.http.get<Acronym[]>(this.glossaryUrl);
  }

  deleteAcronym(acronym: Acronym | number) {
    const id = typeof acronym === 'number' ? acronym : acronym.id;
    const url = `${this.glossaryUrl}/${id}`;

    return this.http.delete<Acronym>(url, httpOptions);
  }
}
