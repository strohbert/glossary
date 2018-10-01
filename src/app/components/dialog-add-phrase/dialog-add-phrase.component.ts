import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-add-phrase',
  templateUrl: './dialog-add-phrase.component.html',
  styleUrls: ['./dialog-add-phrase.component.css']
})
export class DialogAddPhraseComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DialogAddPhraseComponent>) {}

  ngOnInit() {
  }

  close() {
    this.dialogRef.close('Thanks for using me!');
  }
}
