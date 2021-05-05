import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ShoppingReducer } from '../store/reducers/shopping/shopping-reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingEffects } from '../store/effects/shopping/shopping-effects';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';
import { CardItemComponent } from './card-item/card-item.component';
import { MyBasketReducer } from '../store/reducers/my-basket/my-basket-reducer';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingBasketComponent, CardItemComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ shopping: ShoppingReducer, myBasket: MyBasketReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    HttpClientModule,
    EffectsModule.forRoot([ShoppingEffects]),
  ],
  exports: [ShoppingListComponent, ShoppingBasketComponent],
})
export class PagesModule {}
