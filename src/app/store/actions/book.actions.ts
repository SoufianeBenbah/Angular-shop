import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import {Book} from '../../shared/book.model'
import {BookInBasket} from "../../shared/basket.model";



export enum ShoppingAction {
   ADD_TO_BASKET = '[BOOK] Add',
   REMOVE_FROM_BASKET = '[BOOK] Remove Book',
  CLEAR_BASKET = '[BOOK] Remove All Books'
}

export class AddToBasket implements Action {
  readonly type =  ShoppingAction.ADD_TO_BASKET;
  constructor(public payload: BookInBasket) {}
}

export class RemoveFromBasket implements Action {
  readonly type =  ShoppingAction.REMOVE_FROM_BASKET;
  constructor(public payload: number) {}
}

export class RemoveAll implements Action {
  readonly type = ShoppingAction.CLEAR_BASKET;
  constructor() {}
}

export type ShoppingActions = AddToBasket | RemoveFromBasket | RemoveAll;
