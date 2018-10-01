import { Component, OnInit, Inject } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import Button
import { MatDialogRef } from '@angular/material';
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

  constructor(
    private phraseService: PhraseService,
    public dialog: MatDialog
    ) { }

  data = {phrase: '', expression: '', description: ''};

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     width: '250px',
  //     data: {
  //       phrase: this.data.phrase,
  //       expression: this.data.expression,
  //       description: this.data.description
  //       }
  //   });

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
    window.console.log('openAddDialog...');
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(DialogAddPhraseComponent, dialogConfig);
  }

  add(acronym: string, expression: string, description: string): void {
    if (!acronym || !expression || !description) { return; }
    this.phraseService.addPhrase({ acronym: acronym, expression: expression, description: description } as Phrase)
      .subscribe(p => this.phrases.push(p)
    );
  }
}
