import { Component, OnInit, Inject } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import Button
import { MatDialogRef } from '@angular/material';
import {
  MatDialog,
  MatDialogConfig
} from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';

import { Phrase } from '../../phrase';
import { PhraseService } from '../../services/phrase.service';
import { DialogAddPhraseComponent } from '../dialog-add-phrase/dialog-add-phrase.component';
import { HeaderRowPlaceholder } from '@angular/cdk/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  phrases: Phrase[];
// data = {acronym: '', expression: '', description: ''};
  dialogPhrase: Phrase;

  constructor(
    private phraseService: PhraseService,
    public dialog: MatDialog,
    private overlay: Overlay
    ) { }

  ngOnInit() {
    console.log('Entering ngOnInit');
    this.phraseService.getPhrases()
      .subscribe(phrases => {this.phrases = phrases; console.log('onInit Callback:'); console.log(phrases); } );
    console.log('Subscribed');
    console.log(this.phrases);
  }

  delete(phrase: Phrase): void {
    this.phrases = this.phrases.filter(a => a !== phrase);
    this.phraseService.deletePhrase(phrase).subscribe();
  }

  openAddDialog() {
    window.console.log('meth: openAddDialog');

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      phrase: new Phrase(0, '', '', ''),
      title: 'Enter new Phrase',
      buttontext: 'Add'
    };
    const dialogRef = this.dialog.open(DialogAddPhraseComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(value => this.dialogPhrase = value);

    window.console.log(this.dialogPhrase);

    if (this.dialogPhrase) {
      this.phraseService.addPhrase(this.dialogPhrase as Phrase
        ).subscribe(p => this.phrases.push(p));
    }
  }


  openEditDialog( phrase: Phrase) {
    const idx = this.phrases.indexOf(phrase);

    window.console.log('meth: openEditDialog');
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      phrase: phrase,
      title: 'Edit Phrase',
      buttontext: 'Update'
    };
    // dialogConfig.scrollStrategy = this.overlay.scrollStrategies.reposition();
    const dialogRef = this.dialog.open(DialogAddPhraseComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(value => this.dialogPhrase = value);

    this.phraseService.updatePhrase(phrase
      ).subscribe(p => console.log(p));


  }

  onRefresh() {
    return null;
  }
}
