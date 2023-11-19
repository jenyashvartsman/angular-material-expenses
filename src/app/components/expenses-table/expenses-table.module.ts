import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesTableComponent } from './expenses-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [ExpensesTableComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  exports: [ExpensesTableComponent],
})
export class ExpensesTableModule {}
