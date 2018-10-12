import { Component, OnInit, Inject } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import Button
// import { MatDialogRef } from '@angular/material';
import {
  MatDialog,
  MatDialogConfig
} from '@angular/material';

import { Phrase } from '../../phrase';
import { PhraseService } from '../../services/phrase.service';
import { DialogAddPhraseComponent } from '../dialog-add-phrase/dialog-add-phrase.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  phrases: Phrase[];
  nPhrases = 0;
  dialogPhrase: Phrase;

  sortAcronymsAsc = true;
  sortExpressionsAsc = true;

  constructor(
    private phraseService: PhraseService,
    public dialog: MatDialog,
    // private overlay: Overlay
    ) { }

  ngOnInit() {
    console.log('tableComponent.ngOnInit');
    this.refreshPhrases();
  }

  delete(phrase: Phrase): void {
    // this.phrases = this.phrases.filter(a => a !== phrase); // Old (refresh of local cached list)
    this.phraseService.deletePhrase(phrase).subscribe();
    this.refreshPhrases();
  }

  openDialogAdd() {
    console.log('tableComponent.openAddDialog');

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      phrase: new Phrase(0, '', '', ''),
      title: 'Enter new Phrase',
      buttontext: 'Add'
    };
    const dialogRef = this.dialog.open(DialogAddPhraseComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(value => {
      this.dialogPhrase = value;

      if (this.dialogPhrase) {
        this.phraseService.insertPhrase(this.dialogPhrase as Phrase
          ).subscribe(p => console.log('phrase inserted with new id ' + p.id));
      }
      this.refreshPhrases();
    });

  }

  openDialogEdit( phrase: Phrase) {
    const idx = this.phrases.indexOf(phrase);

    console.log('tableComponent.openDialogEdit');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      phrase: phrase,
      title: 'Edit Phrase',
      buttontext: 'Update'
    };
    // dialogConfig.scrollStrategy = this.overlay.scrollStrategies.reposition();
    const dialogRef = this.dialog.open(DialogAddPhraseComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      editedPhrase => {
        console.log('editedPhrase: ' + JSON.stringify(editedPhrase));
        this.dialogPhrase = editedPhrase;
        this.phraseService.updatePhrase(editedPhrase
          ).subscribe(
            resultOfUpdateService => {
            console.log('phraseService.updatePhrase.CallbackResult: ' + resultOfUpdateService);
            this.refreshPhrases();
          });
      }
    );
  }

  refreshPhrases() {
    window.console.log('tableComponent.refreshPhrases');
    this.phraseService.getPhrases()
      .subscribe(phrases => {this.phrases = phrases; this.nPhrases = this.phrases.length; } );
  }

  // ********************** Sorting phrases in ascending / descending order
/**
 * Sorting phrases in ascending
 *
 * @param column: string - either acronym or expression to sort corresponding column
 */
  sortPhrases(column: string) {
    let sfunc; // = (p1: Phrase, p2: Phrase) => { return: number };

    if (column === 'acronym') {
      sfunc = (p1: Phrase, p2: Phrase) => {
        if (p1.acronym.toLowerCase() > p2.acronym.toLowerCase()) { return this.sortAcronymsAsc ?  1 : -1; }
        if (p1.acronym.toLowerCase() < p2.acronym.toLowerCase()) { return this.sortAcronymsAsc ? -1 :  1; }
        return 0;
      };
      this.sortAcronymsAsc = !this.sortAcronymsAsc;
    } else if (column === 'expression') {
      sfunc = (p1: Phrase, p2: Phrase) => {
        if (p1.expression.toLowerCase() > p2.expression.toLowerCase()) { return this.sortExpressionsAsc ?  1 : -1; }
        if (p1.expression.toLowerCase() < p2.expression.toLowerCase()) { return this.sortExpressionsAsc ? -1 :  1; }
        return 0;
      };
      this.sortExpressionsAsc = !this.sortExpressionsAsc;
    }
    this.phrases.sort(sfunc);
  }
}
