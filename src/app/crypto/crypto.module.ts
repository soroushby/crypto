import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoRoutingModule } from './crypto-routing.module';
import { CryptoComponent } from './crypto.component';

import { MaterialModule } from '../shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CryptoComponent],
  imports: [
    CommonModule,
    CryptoRoutingModule,
    MaterialModule,
    HttpClientModule,
  ],
})
export class CryptoModule {}
