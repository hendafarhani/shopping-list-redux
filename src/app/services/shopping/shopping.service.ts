import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { ShoppingItem } from '../../store/state/shopping/shopping-item.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  private SHOPPING_URL = 'http://localhost:3000/shopping';

  constructor(private http: HttpClient) {}

  getShoppingItems() {
    return this.http
      .get<Array<ShoppingItem>>(this.SHOPPING_URL)
      .pipe(delay(500));
  }

  addShoppingItem(shoppingItem: ShoppingItem) {
    return this.http
      .post<ShoppingItem>(this.SHOPPING_URL, shoppingItem)
      .pipe(delay(500));    
  }

  deleteShoppingItem(id: string) {
    return this.http.delete(this.SHOPPING_URL + '/' + id).pipe(delay(500));
  }
}
