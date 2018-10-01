import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';

// Web API emulation
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { DialogAddPhraseComponent } from './components/dialog-add-phrase/dialog-add-phrase.component';
import { SearchComponent } from './components/search/search.component';
import { PhraseService } from './services/phrase.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    SearchComponent,
    DialogAddPhraseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    // Web API emulation
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [PhraseService],
  bootstrap: [AppComponent],
  entryComponents: [DialogAddPhraseComponent]
})
export class AppModule { }
