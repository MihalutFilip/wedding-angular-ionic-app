import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPersonModalPage } from './add-person-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddPersonModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPersonModalPageRoutingModule {}
