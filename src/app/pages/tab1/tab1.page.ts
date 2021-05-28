import { Component, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AddPersonModalPage } from 'src/app/modals/add-person-modal/add-person-modal.page';
import { StorageService } from 'src/app/services/storage-service/storage-service.service';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public persons: any;

  constructor(private alertController: AlertController,
    private modalController: ModalController,
    private storageService: StorageService) {
      this.intializePersons();
  }

  async intializePersons() {
    this.persons = await this.storageService.get('persoane') || [];
    console.log(this.persons);
  }

  async clickPerson() {
    let a = await this.storageService.get('persoane');
    console.log(a);
    const alert = await this.alertController.create({
      subHeader: 'Adaugi aceasta persoana la invitati?',
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

  async addPerson() {
    const modal = await this.modalController.create({
      component: AddPersonModalPage
    });
    return await modal.present();
  }
}
