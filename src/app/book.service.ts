import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = 'http://localhost:8080/BookService/jaxrs/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  addBook(book: Book): Observable<Book> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    return this.http.post<Book>(this.url, book, {headers: headers});
  }
}
