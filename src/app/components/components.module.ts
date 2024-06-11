import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PickupCallCardComponent } from './pickup-call-card/pickup-call-card.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  exports: [PickupCallCardComponent],
  declarations: [PickupCallCardComponent],
})
export class ComponentsModule {}
