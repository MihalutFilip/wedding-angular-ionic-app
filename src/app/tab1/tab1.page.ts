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
      { name: 'Nume' },
      { name: 'Persoane' },
      { name: 'Cazare' }
    ];

    this.rows = [
      {
        "nume": "Andrei Craiu",
        "persoane": "2",
        "cazare": "Nu"
    },
    {
        "nume": "Baiat din Cluj",
        "persoane": "2",
        "cazare": "Da"
    }
    ]
  }

}
