import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CryptoDataService } from '../services/crypto-data.service';

@Injectable({
  providedIn: 'root',
})
export class SignleCryptoResolver implements Resolve<boolean> {
  constructor(private cryptoDataService: CryptoDataService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const cryptoId = route.paramMap.get('id');

    return this.cryptoDataService.getSingleCrypto(cryptoId);
  }
}
