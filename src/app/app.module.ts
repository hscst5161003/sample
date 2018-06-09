import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatChipsModule, MatCardModule, MatListModule, } from '@angular/material';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { EditorComponent } from './editor/editor.component';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    EditorComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
