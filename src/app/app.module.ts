import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ExpensesTableModule } from './components/expenses-table/expenses-table.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    MatSidenavModule,
    ExpensesTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
