import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public columns: any;
  public rows: any;

  constructor() {
    this.columns = [
      { name: 'Name' },
      { name: 'Company' },
      { name: 'Genre' }
    ];

    this.rows = [
      {
        "name": "Escape Room",
        "company": "Columbia Pictures",
        "genre": "Horror"
    },
    {
        "name": "Rust Creek",
        "company": "IFC Films",
        "genre": "Drama"
    },
    {
        "name": "American Hangman",
        "company": "Hangman Productions",
        "genre": "Thriller"
    }
    ]
  }

}
