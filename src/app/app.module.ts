import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatChipsModule, MatCardModule, MatListModule,
         MatGridListModule, MatDividerModule, MatInputModule, } from '@angular/material';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { EditorComponent } from './editor/editor.component';
import { OutputComponent } from './output/output.component';
import { ChipFactoryComponent } from './chip-factory/chip-factory.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    EditorComponent,
    OutputComponent,
    ChipFactoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatDividerModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
