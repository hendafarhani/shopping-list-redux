import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { ShoppingReducer } from './store/reducers/shopping-reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingEffects } from './store/effects/shopping-effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ shopping: ShoppingReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    HttpClientModule,
    EffectsModule.forRoot([ShoppingEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
