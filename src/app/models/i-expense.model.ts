import { EExpenseType } from './e-expense.type';

export interface IExpenseModel {
  id?: string;
  type: EExpenseType;
  title: string;
  description?: string;
  date: Date;
  amount: number;
}
