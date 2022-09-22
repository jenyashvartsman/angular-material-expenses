import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly prefix = 'angular_material_expenses';
  private readonly storage = localStorage;

  constructor() {}

  setItem(key: string, value: any): void {
    this.storage.setItem(
      this._getKey(key),
      typeof value === 'object' ? JSON.stringify(value) : value
    );
  }

  getItem(key: string): any {
    try {
      const value = this.storage.getItem(this._getKey(key));
      return JSON.parse(value as string);
    } catch (e) {
      console.error(e);
    }
  }

  private _getKey(key: string): string {
    return `${this.prefix}_${key}`;
  }
}
