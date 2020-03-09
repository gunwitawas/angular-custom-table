import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GenarateTableComponent } from './genarate-table/genarate-table.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GenarateTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
