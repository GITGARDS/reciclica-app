import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickupCallsPageRoutingModule } from './pickup-calls-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';
import { PickupCallsPage } from './pickup-calls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickupCallsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PickupCallsPage]
})
export class PickupCallsPageModule {}
