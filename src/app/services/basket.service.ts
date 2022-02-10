import {delay, of, tap} from "rxjs";
import products from "../products.json";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

export interface product{
  name: string
  price: number
  img: string
  author: string
  inCart: boolean
}

@Injectable(
  {providedIn: 'root',}
)
export class BasketService{

  constructor(private http: HttpClient) {
  }


}
