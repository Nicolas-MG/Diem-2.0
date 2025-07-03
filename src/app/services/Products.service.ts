import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prendas } from '../model/Prendas';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) { }

  getProducts(category?: string):Observable<Prendas[]> {
    const url = new URL('https://api.escuelajs.co/api/v1/products');
    if (category){
      url.searchParams.set('categoryId', category);
    }
    return this.http.get<Prendas[]>(url.toString());
  }
}
