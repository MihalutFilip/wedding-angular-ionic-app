import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InvitationType } from 'src/app/models/enums/invitation-type';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-add-person-modal',
  templateUrl: './add-person-modal.page.html',
  styleUrls: ['./add-person-modal.page.scss'],
})
export class AddPersonModalPage implements OnInit {
  person: Person;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.person = <Person>{
      id: 0,
      invitationType: InvitationType.Proposed,
      name: ''
    }
  }

  setName(name) {
    this.person.name = name;
  }

  closeModal() {
    this.modalController.dismiss(this.person);
  }

}
