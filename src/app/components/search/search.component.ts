import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Phrase } from '../../phrase';
import { PhraseService } from '../../services/phrase.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() phrasesCount: number;
  phrases$: Observable<Phrase[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private phraseService: PhraseService,
    protected tableComponent: TableComponent) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
    console.log('Term:');
    console.log(term);
    if (term) {
      this.phrases$.subscribe(resultPhrases => this.tableComponent.phrases = resultPhrases);
    } else {
      this.phraseService.getPhrases().subscribe(dbPhrases => this.tableComponent.phrases = dbPhrases);
    }
  }

  ngOnInit(): void {
    this.phrases$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.phraseService.searchPhrases(term)),
    );
  }
}
