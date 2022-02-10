import { Component, OnInit } from '@angular/core';
import {from, Observable} from "rxjs";
import {BasketService} from "../services/basket.service";
import {Book} from "../shared/book.model";
import {BookInBasket} from "../shared/basket.model";
import {Store} from "@ngrx/store";
import {appState} from "../store/app.state";
import {RemoveFromBasket} from "../store/actions/book.actions";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  booksInBasket$?: Observable<Book[]>
  Books: [] = [];
  constructor(private store: Store<appState>) {}

  ngOnInit(): void {
    this.booksInBasket$= this.store.select(store => store.book);
    this.booksInBasket$.subscribe((book)=>(console.log(book[0])))
  }

  removeBookFromBasket(index: number) : void {
    this.store.dispatch(new RemoveFromBasket(index))
  }
}
