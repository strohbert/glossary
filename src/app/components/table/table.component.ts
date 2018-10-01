import { Component, OnInit, Inject } from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// import Button
import { MatDialogRef } from '@angular/material';
import {
  MatDialog,
  MatDialogConfig
} from '@angular/material';


import { Acronym } from '../../acronym';
import { AcronymService } from '../../services/acronym.service';
import { DialogAddPhraseComponent } from '../dialog-add-phrase/dialog-add-phrase.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  acronyms: Acronym[];

  constructor(
    private acronymService: AcronymService,
    public dialog: MatDialog
    ) { }

  data = {acronym: '', expression: '', description: ''};

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     width: '250px',
  //     data: {
  //       acronym: this.data.acronym,
  //       expression: this.data.expression,
  //       description: this.data.description
  //       }
  //   });



  ngOnInit() {
    this.acronymService.getAcronyms()
      .subscribe(acronyms => this.acronyms = acronyms);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(DialogAddPhraseComponent, dialogConfig);
  }

  delete(acronym: Acronym): void {
    this.acronyms = this.acronyms.filter(a => a !== acronym);
    this.acronymService.deleteAcronym(acronym).subscribe();
  }

}


