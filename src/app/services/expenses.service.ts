import { Injectable } from '@angular/core';
import { IExpenseModel } from '../models/i-expense.model';
import { StorageService } from './storage.service';
import { v4 as uuidv4 } from 'uuid';
import { EExpenseType } from '../models/e-expense.type';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  private readonly storageKey = 'expneses';

  constructor(private storageService: StorageService) {
    this.seed();
  }

  getAll(): IExpenseModel[] {
    return JSON.parse(this.storageService.getItem(this.storageKey)) || [];
  }

  getOne(id: string): IExpenseModel {
    const expenses = this.getAll();
    const found = expenses.find((expense) => expense.id === id);

    if (!!found) {
      return found;
    } else {
      throw new Error(`Expense with id: ${id}, not found`);
    }
  }

  createOne(expense: IExpenseModel): void {
    const currentExpenses = this.getAll();
    this.storageService.setItem(this.storageKey, [...currentExpenses, expense]);
  }

  private seed(): void {
    const expenses = this.getAll();

    if (expenses.length === 0) {
      this.createOne({
        id: uuidv4(),
        type: EExpenseType.Housing,
        title: 'Rent',
        amount: 1250.0,
        date: new Date(),
      });
    }
  }
}
