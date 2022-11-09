import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleCrypto } from '../interfaces/single-crypto';

@Component({
  selector: 'app-crypto-detail',
  templateUrl: './crypto-detail.component.html',
  styleUrls: ['./crypto-detail.component.scss'],
})
export class CryptoDetailComponent implements OnInit {
  singleCrypto: SingleCrypto | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.singleCrypto = this.route.snapshot.data['singleCrypto'];
    console.log(this.singleCrypto);
  }
}
