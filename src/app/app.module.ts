import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { DialogAddPhraseComponent } from './components/dialog-add-phrase/dialog-add-phrase.component';
import { SearchComponent } from './components/search/search.component';
import { AppRoutingModule } from './app-routing.module';

// Web API emulation
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AcronymService } from './services/acronym.service';

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
    // Web API emulation
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [AcronymService],
  bootstrap: [AppComponent],
  entryComponents: [DialogAddPhraseComponent]
})
export class AppModule { }
