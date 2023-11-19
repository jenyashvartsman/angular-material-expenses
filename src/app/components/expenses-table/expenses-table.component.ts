import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IExpenseModel } from 'src/app/models/i-expense.model';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss'],
})
export class ExpensesTableComponent implements OnInit {
  // table
  readonly displayedColumns: string[] = ['title', 'type', 'amount', 'date'];
  dataSource = new MatTableDataSource<IExpenseModel>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.dataSource.data = this.expensesService.getAll();
    this.dataSource.sort = this.sort;
  }
}
