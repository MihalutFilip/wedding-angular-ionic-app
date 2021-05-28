import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public columns: any;
  public rows: any;

  constructor(private alertController: AlertController) {
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

  async clickPerson() {
    const alert = await this.alertController.create({
      message: 'Adaugi aceasta persoana la invitati?',
      buttons: [{
        text: 'Nu',
        role: 'false'
      },
      {
        text: 'Da',
        role: 'true'
      }]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    
  }

}
