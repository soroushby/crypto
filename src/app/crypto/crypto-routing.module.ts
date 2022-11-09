import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoDetailComponent } from './crypto-detail/crypto-detail.component';
import { CryptoComponent } from './crypto.component';
import { SignleCryptoResolver } from './resolver/signle-crypto.resolver';

const routes: Routes = [
  { path: '', component: CryptoComponent },
  {
    path: ':id',
    component: CryptoDetailComponent,
    resolve: {
      singleCrypto: SignleCryptoResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoRoutingModule {}
