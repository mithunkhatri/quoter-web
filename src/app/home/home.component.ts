import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public quoteService: QuoteService) { }

  ngOnInit() {
    this.findRandomQuote();
  }

  public quote: String;
  public author: String;
  response: any;

  findRandomQuote() {
    this.response = this.quoteService.findRandomQuote().subscribe(
      data => {
        this.response = data,
        this.quote = this.response.quote,
        this.author = this.response.author
      },
      error => console.log(error)
    )
  }
}
