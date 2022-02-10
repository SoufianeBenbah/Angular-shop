import { Component, OnInit } from '@angular/core';
import {appState} from "../store/app.state";
import {Store} from "@ngrx/store";
import { Book } from '../shared/book.model'
import {BookInBasket} from "../shared/basket.model";
import {AddToBasket} from "../store/actions/book.actions";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[]= [];

  constructor(private store: Store<appState>) {
  }


  ngOnInit(): void {
    this.books = Book.getBooks;
  }

  getBookInfo(book: Book){
    window.alert(book.description + '\n'+ '\n'
      + 'Category: ' + book.category + '\n'
      + 'Type: ' + book.type)

  }

  addToCart(selectedBook: Book) : void {
    const newBookInBasket = {
      book: selectedBook
    } as BookInBasket;

    this.store.dispatch(new AddToBasket(newBookInBasket));
  }
}
