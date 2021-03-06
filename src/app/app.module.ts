import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionReducerMap, StoreModule} from "@ngrx/store";
import {bookReducer} from "./store/reducers/book.reducer";

import { ContactComponent } from "./contact/contact.component";
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BasketComponent } from './basket/basket.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component'
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BasketComponent,
    NavbarComponent,
    ContactComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({book: bookReducer} as ActionReducerMap<any,any> ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
