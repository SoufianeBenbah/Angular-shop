import {Book} from '../../shared/book.model'

import * as StoreActions from '../actions/book.actions'
import {ShoppingAction} from '../actions/book.actions'

const initialState : Book[] = []

export function bookReducer(state: Book[] = initialState, action: StoreActions.ShoppingActions){
  switch (action.type){
    case ShoppingAction.ADD_TO_BASKET:
      return [...state, action.payload];
    case ShoppingAction.REMOVE_FROM_BASKET:
      return state.filter(item => item.id !== action.payload)
    case ShoppingAction.CLEAR_BASKET:
      return [];
    default:
      return state;
  }

}
