import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { LoadingComponent } from './loading/loading.component';
import { PickupCallCardComponent } from './pickup-call-card/pickup-call-card.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [
    PickupCallCardComponent,
    ErrorMessageComponent,
    LoadingComponent,
  ],
  exports: [PickupCallCardComponent, ErrorMessageComponent, LoadingComponent],
})
export class ComponentsModule {}
