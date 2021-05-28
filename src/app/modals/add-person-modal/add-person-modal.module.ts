import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPersonModalPageRoutingModule } from './add-person-modal-routing.module';

import { AddPersonModalPage } from './add-person-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPersonModalPageRoutingModule
  ],
  declarations: [AddPersonModalPage]
})
export class AddPersonModalPageModule {}
