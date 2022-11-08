import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AllCryptos } from './interfaces/all-cryptos';
import { CryptoDataService } from './services/crypto-data.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss'],
})
export class CryptoComponent implements OnInit {
  url = 'https://api.coincap.io/v2/assets';
  allCryptos$: Observable<AllCryptos[]> | undefined;
  constructor(
    private http: HttpClient,
    private cryptoDataService: CryptoDataService
  ) {}

  ngOnInit(): void {
    this.allCryptos$ = this.cryptoDataService.getAllCryptos(this.url);
  }
}
