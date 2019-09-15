import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiUrl = '/server/v1/quotes';

  constructor(private http: HttpClient) { }

  findRandomQuote() {
    return this.http.get(this.apiUrl + '/random');
    }
}
