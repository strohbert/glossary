import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import {
//   MatButtonModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatRippleModule
// } from '@angular/material';
import { Phrase } from '../../phrase';

@Component({
  selector: 'app-dialog-add-phrase',
  templateUrl: './dialog-add-phrase.component.html',
  styleUrls: ['./dialog-add-phrase.component.css']
})
export class DialogAddPhraseComponent implements OnInit {
  phrase = this.data.phrase;
  edit = this.data.edit;

  constructor(
    public dialogRef: MatDialogRef<DialogAddPhraseComponent>,
    // Inject MAT_DIALOG_DATA to retrieve data
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

  onSubmit() {
    this.dialogRef.close(this.phrase);
    // install event to refresh UI
  }

  onCancel() {
    console.log('onCancel');
    this.dialogRef.close();
  }


  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.phrase); }
}
