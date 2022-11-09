import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { AllCryptos } from '../interfaces/all-cryptos';
import { SingleCrypto } from '../interfaces/single-crypto';

@Injectable({
  providedIn: 'root',
})
export class CryptoDataService {
  constructor(private http: HttpClient) {}

  getAllCryptos(url: string): Observable<AllCryptos[]> {
    return this.http.get(url).pipe(
      map((cryptos: any) => cryptos['data']),
      shareReplay()
    );
  }

  getSingleCrypto(id: any) {
    return this.http
      .get<SingleCrypto>(`api.coincap.io/v2/assets/${id}`)
      .pipe(map((singleCrypto: any) => singleCrypto['data']));
  }
}
