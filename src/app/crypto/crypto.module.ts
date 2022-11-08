import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoRoutingModule } from './crypto-routing.module';
import { CryptoComponent } from './crypto.component';

import { HttpClientModule } from '@angular/common/http';
import { CryptoGridComponent } from './cryptoGrid/crypto-grid/crypto-grid.component';

import { MaterialModule } from '../shared/material/material.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [CryptoComponent, CryptoGridComponent],
  imports: [
    CommonModule,
    CryptoRoutingModule,
    MaterialModule,
    HttpClientModule,
    AgGridModule,
  ],
})
export class CryptoModule {}
